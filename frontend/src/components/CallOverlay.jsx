import { useEffect, useMemo, useRef } from "react";
import {
  Mic,
  MicOff,
  MonitorUp,
  Phone,
  PhoneOff,
  Video,
  VideoOff,
} from "lucide-react";
import { useCallStore } from "../store/useCallStore";

const CallOverlay = () => {
  const {
    callStatus,
    callType,
    incomingCall,
    activeCall,
    localStream,
    remoteStream,
    isMuted,
    isCameraOff,
    isScreenSharing,
    acceptCall,
    rejectCall,
    endCall,
    toggleMute,
    toggleCamera,
    toggleScreenShare,
  } = useCallStore();

  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const remoteAudioRef = useRef(null);

  const statusLabel = useMemo(() => {
    if (callStatus === "calling") return "Calling...";
    if (callStatus === "connecting") return "Connecting...";
    if (callStatus === "ringing") return "Incoming call";
    if (callStatus === "in-call") return "In call";
    return "";
  }, [callStatus]);

  useEffect(() => {
    if (localVideoRef.current && localStream) {
      localVideoRef.current.srcObject = localStream;
    }
  }, [localStream]);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
    if (remoteAudioRef.current && remoteStream) {
      remoteAudioRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  useEffect(() => {
    if (callStatus !== "ringing") return undefined;

    let audioContext;
    let oscillator;
    let gain;
    let intervalId;

    const startRinger = async () => {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.resume();

        oscillator = audioContext.createOscillator();
        gain = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.value = 520;
        gain.gain.value = 0;

        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start();

        let enabled = false;
        intervalId = setInterval(() => {
          enabled = !enabled;
          gain.gain.setTargetAtTime(enabled ? 0.04 : 0, audioContext.currentTime, 0.02);
        }, 700);
      } catch (error) {
        // Ignore ringer failures (autoplay restrictions)
      }
    };

    startRinger();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (oscillator) oscillator.stop();
      if (audioContext) audioContext.close();
    };
  }, [callStatus]);

  if (callStatus === "idle") return null;

  const displayName = incomingCall?.fromUser?.fullName || activeCall?.withName;
  const displayAvatar = incomingCall?.fromUser?.profilePic || activeCall?.withAvatar;
  const isVideoCall = callType === "video";
  const showControls = callStatus !== "ringing";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-base-100 w-full max-w-3xl rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-base-300">
          <div>
            <h3 className="font-semibold">{displayName || "Call"}</h3>
            <p className="text-sm text-base-content/70">{statusLabel}</p>
          </div>
          <span className="text-xs uppercase text-base-content/60">
            {isVideoCall ? "Video" : "Audio"}
          </span>
        </div>

        <div className="relative bg-base-200 flex items-center justify-center h-[26rem]">
          {isVideoCall ? (
            <>
              <video
                ref={remoteVideoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <video
                ref={localVideoRef}
                autoPlay
                playsInline
                muted
                className="absolute bottom-4 right-4 w-40 h-28 object-cover rounded-md border border-base-300"
              />
            </>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <img
                src={displayAvatar || "/avatar.png"}
                alt={displayName || "User"}
                className="size-28 rounded-full border border-base-300"
              />
              <p className="text-base-content/80">{displayName || "User"}</p>
              <audio ref={remoteAudioRef} autoPlay />
            </div>
          )}
        </div>

        {callStatus === "ringing" ? (
          <div className="p-4 flex items-center justify-center gap-4">
            <button className="btn btn-circle btn-success" onClick={acceptCall}>
              <Phone className="size-5" />
            </button>
            <button className="btn btn-circle btn-error" onClick={rejectCall}>
              <PhoneOff className="size-5" />
            </button>
          </div>
        ) : (
          <div className="p-4 flex items-center justify-center gap-3">
            {showControls && (
              <button
                className="btn btn-circle"
                onClick={toggleMute}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <MicOff className="size-5" /> : <Mic className="size-5" />}
              </button>
            )}

            {isVideoCall && showControls && (
              <button
                className="btn btn-circle"
                onClick={toggleCamera}
                title={isCameraOff ? "Turn camera on" : "Turn camera off"}
              >
                {isCameraOff ? (
                  <VideoOff className="size-5" />
                ) : (
                  <Video className="size-5" />
                )}
              </button>
            )}

            {isVideoCall && showControls && (
              <button
                className={`btn btn-circle ${isScreenSharing ? "btn-accent" : ""}`}
                onClick={toggleScreenShare}
                title={isScreenSharing ? "Stop screen share" : "Share screen"}
              >
                <MonitorUp className="size-5" />
              </button>
            )}

            <button className="btn btn-circle btn-error" onClick={endCall}>
              <PhoneOff className="size-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallOverlay;
