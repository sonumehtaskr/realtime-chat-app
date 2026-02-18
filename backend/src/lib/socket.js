import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// used to store online users
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  socket.on("call:request", (payload) => {
    const receiverSocketId = getReceiverSocketId(payload.toUserId);
    if (!receiverSocketId) {
      socket.emit("call:unavailable", {
        toUserId: payload.toUserId,
        callId: payload.callId,
      });
      return;
    }

    io.to(receiverSocketId).emit("call:request", payload);
  });

  socket.on("call:accept", (payload) => {
    const receiverSocketId = getReceiverSocketId(payload.toUserId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("call:accept", payload);
    }
  });

  socket.on("call:reject", (payload) => {
    const receiverSocketId = getReceiverSocketId(payload.toUserId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("call:reject", payload);
    }
  });

  socket.on("call:end", (payload) => {
    const receiverSocketId = getReceiverSocketId(payload.toUserId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("call:end", payload);
    }
  });

  socket.on("call:answer", (payload) => {
    const receiverSocketId = getReceiverSocketId(payload.toUserId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("call:answer", payload);
    }
  });

  socket.on("call:ice-candidate", (payload) => {
    const receiverSocketId = getReceiverSocketId(payload.toUserId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("call:ice-candidate", payload);
    }
  });
});

export { io, app, server };
