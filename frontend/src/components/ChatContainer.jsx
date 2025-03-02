import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";
import { ArrowDownToLine } from "lucide-react";
import { ColorRing } from "react-loader-spinner";
import getFileTypeIcon from "../assets/FileTypeIcons";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import VideoPlayer from "./VideoPlayer";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    isMessagesSending,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);

    subscribeToMessages();

    return () => unsubscribeFromMessages();
  }, [
    selectedUser._id,
    getMessages,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  const isImage = (url) => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
    return imageExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  const isVideo = (url) => {
    const videoExtensions = [
      ".mp4",
      ".mkv",
      ".webm",
      ".avi",
      ".mov",
      ".flv",
      ".wmv",
      ".mpeg",
      ".mpg",
    ];
    return videoExtensions.some((ext) => url.toLowerCase().endsWith(ext));
  };

  const getFileSize = async (fileUrl) => {
    try {
      const response = await fetch(fileUrl, { method: "HEAD" });
      const contentLength = response.headers.get("Content-Length");
      if (contentLength) {
        return contentLength;
      } else {
        console.error("Could not retrieve file size");
      }
    } catch (error) {
      console.error("Error fetching file size:", error);
    }
  };

  const fetchSize = async (fileUrl) => {
    const fileSize = await getFileSize(fileUrl);
    console.log("File size:", fileSize);
  };

  fetchSize(
    "http://localhost:5001/uploads/675448d60abd65ea01247147-1733747437171.mp4"
  );

  useEffect(() => {
    console.log("Messages are ", messages);
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${
              message.senderId === authUser._id ? "chat-end" : "chat-start"
            }`}
            ref={messageEndRef}
          >
            <div className=" chat-image avatar">
              <div className="size-10 rounded-full border">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.png"
                      : selectedUser.profilePic || "/avatar.png"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1">
              <time className="text-xs opacity-50 ml-1">
                {formatMessageTime(message.createdAt)}
              </time>
            </div>
            <div className="chat-bubble flex flex-col">
              {message.image && (
                <div className="relative">
                  {isImage(message.image) ? (
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="sm:max-w-[200px] rounded-md mb-2"
                    />
                  ) : isVideo(message.image) ? (
                    <VideoPlayer videoUrl={message.image} />
                  ) : (
                    <div className="p-2 font-bold text-center">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: getFileTypeIcon(message.image),
                        }}
                      />
                      <p>{message.image.slice(-10)}</p>
                    </div>
                  )}

                  {/* Download button (for image or non-image) */}
                  {message.image && (
                    <a
                      target="_blank"
                      href={message.image}
                      download=""
                      className="absolute -bottom-2 -right-2"
                    >
                      <button>
                        <ArrowDownToLine />
                      </button>
                    </a>
                  )}
                </div>
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="chat-end">
        {isMessagesSending && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </div>

      <MessageInput />
    </div>
  );
};
export default ChatContainer;
