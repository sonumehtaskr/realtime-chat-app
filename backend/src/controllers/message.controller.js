import User from "../models/user.model.js";
import Message from "../models/message.model.js";

import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function fileSave(file, filename) {
  try {
    const fileType = file.name.split(".").pop().toLowerCase();
    // const supportedTypes = ["jpeg", "jpg", "png"];

    // if (!supportedTypes.includes(fileType)) {
    //   throw new Error("File type not supported");
    // }

    const filePath = path.join(
      __dirname,
      "uploads",
      `${filename}-${Date.now()}.${fileType}`
    );

    file.mv(filePath, (err) => {
      if (err) {
        console.error("Error during file movement: ", err);
        throw new Error("File movement failed");
      }
    });

    return filePath; // Return the file path
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong while uploading the file");
  }
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { use_filename: true, unique_filename: false, folder };
  if (quality) {
    options.quality = quality;
  }
  options.resource_type = "auto";
  options.public_id = file.name.replace(/\.[^/.]+$/, "");
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const image = req?.files?.image;
    const { text } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl, localimageUrl;
    if (image) {
      // const uploadResponse = await uploadFileToCloudinary(image, "message");
      // imageUrl = uploadResponse.secure_url;
      localimageUrl = await fileSave(image, senderId);
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: localimageUrl
        ? "http://localhost:5001/" +
          localimageUrl?.split("src/controllers/").pop()
        : undefined,
    });

    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
