import { create } from "zustand";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";
import { useChatStore } from "./useChatStore";

const ICE_SERVERS = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" },
];

const initialState = {
  callStatus: "idle",
  callType: null,
  callId: null,
  incomingCall: null,
  activeCall: null,
  localStream: null,
  remoteStream: null,
  peerConnection: null,
  pendingCandidates: [],
  isMuted: false,
  isCameraOff: false,
  isScreenSharing: false,
  screenTrack: null,
  cameraTrack: null,
};

const stopTracks = (stream) => {
  if (!stream) return;
  stream.getTracks().forEach((track) => track.stop());
};

export const useCallStore = create((set, get) => ({
  ...initialState,

  bindSocket: (socket) => {
    if (!socket) return;

    socket.off("call:request");
    socket.off("call:accept");
    socket.off("call:reject");
    socket.off("call:answer");
    socket.off("call:end");
    socket.off("call:ice-candidate");
    socket.off("call:unavailable");

    socket.on("call:request", (payload) => {
      if (get().callStatus !== "idle") {
        socket.emit("call:reject", {
          toUserId: payload.fromUser._id,
          callId: payload.callId,
          reason: "busy",
        });
        return;
      }

      set({
        callStatus: "ringing",
        callType: payload.callType,
        callId: payload.callId,
        incomingCall: payload,
        pendingCandidates: [],
        activeCall: {
          withUserId: payload.fromUser._id,
          withName: payload.fromUser.fullName,
          withAvatar: payload.fromUser.profilePic,
        },
      });
    });

    socket.on("call:accept", (payload) => {
      if (payload.callId !== get().callId) return;
      set({ callStatus: "connecting" });
    });

    socket.on("call:reject", (payload) => {
      if (payload.callId !== get().callId) return;
      toast.error("Call declined");
      get().cleanupCall(false);
    });

    socket.on("call:answer", async (payload) => {
      if (payload.callId !== get().callId) return;
      const pc = get().peerConnection;
      if (!pc) return;

      await pc.setRemoteDescription(payload.answer);

      const pending = get().pendingCandidates;
      for (const candidate of pending) {
        await pc.addIceCandidate(candidate);
      }

      set({ pendingCandidates: [], callStatus: "in-call" });
    });

    socket.on("call:ice-candidate", async (payload) => {
      if (payload.callId !== get().callId) return;
      const pc = get().peerConnection;
      if (!pc || !pc.remoteDescription) {
        set({ pendingCandidates: [...get().pendingCandidates, payload.candidate] });
        return;
      }

      await pc.addIceCandidate(payload.candidate);
    });

    socket.on("call:end", (payload) => {
      if (payload.callId !== get().callId) return;
      toast("Call ended");
      get().cleanupCall(false);
    });

    socket.on("call:unavailable", (payload) => {
      if (payload.callId !== get().callId) return;
      toast.error("User is unavailable");
      get().cleanupCall(false);
    });
  },

  startCall: async (callType) => {
    const { selectedUser } = useChatStore.getState();
    const { authUser, socket } = useAuthStore.getState();

    if (!selectedUser || !authUser || !socket) {
      toast.error("Unable to start call");
      return;
    }

    if (get().callStatus !== "idle") {
      toast.error("Already in a call");
      return;
    }

    const callId = `${authUser._id}-${selectedUser._id}-${Date.now()}`;

    try {
      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: callType === "video",
      });

      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

      pc.onicecandidate = (event) => {
        if (!event.candidate) return;
        socket.emit("call:ice-candidate", {
          toUserId: selectedUser._id,
          callId,
          candidate: event.candidate,
        });
      };

      pc.ontrack = (event) => {
        const [stream] = event.streams;
        if (stream) set({ remoteStream: stream });
      };

      localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      socket.emit("call:request", {
        toUserId: selectedUser._id,
        callId,
        callType,
        offer,
        fromUser: {
          _id: authUser._id,
          fullName: authUser.fullName,
          profilePic: authUser.profilePic,
        },
      });

      set({
        callStatus: "calling",
        callType,
        callId,
        localStream,
        peerConnection: pc,
        activeCall: {
          withUserId: selectedUser._id,
          withName: selectedUser.fullName,
          withAvatar: selectedUser.profilePic,
        },
        isMuted: false,
        isCameraOff: false,
        isScreenSharing: false,
        screenTrack: null,
        cameraTrack: null,
        remoteStream: null,
        pendingCandidates: [],
      });
    } catch (error) {
      toast.error("Could not access media devices");
      get().cleanupCall(false);
    }
  },

  acceptCall: async () => {
    const { incomingCall } = get();
    const { authUser, socket } = useAuthStore.getState();

    if (!incomingCall || !socket || !authUser) return;

    try {
      socket.emit("call:accept", {
        toUserId: incomingCall.fromUser._id,
        callId: incomingCall.callId,
      });

      const localStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: incomingCall.callType === "video",
      });

      const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

      pc.onicecandidate = (event) => {
        if (!event.candidate) return;
        socket.emit("call:ice-candidate", {
          toUserId: incomingCall.fromUser._id,
          callId: incomingCall.callId,
          candidate: event.candidate,
        });
      };

      pc.ontrack = (event) => {
        const [stream] = event.streams;
        if (stream) set({ remoteStream: stream });
      };

      localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

      await pc.setRemoteDescription(incomingCall.offer);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      socket.emit("call:answer", {
        toUserId: incomingCall.fromUser._id,
        callId: incomingCall.callId,
        answer,
      });

      const pending = get().pendingCandidates;
      for (const candidate of pending) {
        await pc.addIceCandidate(candidate);
      }

      set({
        callStatus: "in-call",
        callType: incomingCall.callType,
        callId: incomingCall.callId,
        incomingCall: null,
        localStream,
        peerConnection: pc,
        pendingCandidates: [],
        isMuted: false,
        isCameraOff: false,
        isScreenSharing: false,
        screenTrack: null,
        cameraTrack: null,
        remoteStream: null,
        activeCall: {
          withUserId: incomingCall.fromUser._id,
          withName: incomingCall.fromUser.fullName,
          withAvatar: incomingCall.fromUser.profilePic,
        },
      });
    } catch (error) {
      toast.error("Could not accept call");
      get().cleanupCall(false);
    }
  },

  rejectCall: () => {
    const { incomingCall } = get();
    const { socket } = useAuthStore.getState();

    if (!incomingCall || !socket) return;

    socket.emit("call:reject", {
      toUserId: incomingCall.fromUser._id,
      callId: incomingCall.callId,
    });

    get().cleanupCall(false);
  },

  endCall: () => {
    get().cleanupCall(true);
  },

  cleanupCall: (notifyRemote) => {
    const { socket } = useAuthStore.getState();
    const { peerConnection, localStream, screenTrack, cameraTrack, activeCall, callId } = get();

    if (notifyRemote && socket && activeCall && callId) {
      socket.emit("call:end", {
        toUserId: activeCall.withUserId,
        callId,
      });
    }

    if (peerConnection) {
      peerConnection.getSenders().forEach((sender) => sender.track?.stop());
      peerConnection.close();
    }

    stopTracks(localStream);
    if (screenTrack) screenTrack.stop();
    if (cameraTrack) cameraTrack.stop();

    set({ ...initialState });
  },

  toggleMute: () => {
    const { localStream, isMuted } = get();
    if (!localStream) return;

    localStream.getAudioTracks().forEach((track) => {
      track.enabled = isMuted;
    });

    set({ isMuted: !isMuted });
  },

  toggleCamera: () => {
    const { localStream, isCameraOff, isScreenSharing, screenTrack } = get();
    if (!localStream) return;

    const videoTracks = localStream.getVideoTracks();
    if (videoTracks.length === 0) return;

    if (isScreenSharing && screenTrack) {
      screenTrack.enabled = isCameraOff;
    } else {
      videoTracks.forEach((track) => {
        track.enabled = isCameraOff;
      });
    }

    set({ isCameraOff: !isCameraOff });
  },

  toggleScreenShare: async () => {
    const { callType, peerConnection, isScreenSharing, localStream, cameraTrack } = get();

    if (callType !== "video" || !peerConnection) return;

    const sender = peerConnection
      .getSenders()
      .find((item) => item.track && item.track.kind === "video");

    if (!sender) return;

    if (!isScreenSharing) {
      try {
        const displayStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        const screenTrack = displayStream.getVideoTracks()[0];
        const audioTracks = localStream ? localStream.getAudioTracks() : [];
        const currentCameraTrack = sender.track;

        await sender.replaceTrack(screenTrack);

        screenTrack.onended = () => {
          get().toggleScreenShare();
        };

        const newLocalStream = new MediaStream([ ...audioTracks, screenTrack ]);

        set({
          isScreenSharing: true,
          screenTrack,
          cameraTrack: currentCameraTrack,
          localStream: newLocalStream,
          isCameraOff: false,
        });
      } catch (error) {
        toast.error("Screen share denied");
      }

      return;
    }

    if (cameraTrack) {
      await sender.replaceTrack(cameraTrack);
      const audioTracks = localStream ? localStream.getAudioTracks() : [];
      const newLocalStream = new MediaStream([ ...audioTracks, cameraTrack ]);
      set({
        isScreenSharing: false,
        screenTrack: null,
        localStream: newLocalStream,
        isCameraOff: false,
      });
    }
  },
}));
