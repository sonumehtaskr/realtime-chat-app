# Full-Stack Interview Q&A (Mid to Senior)

Focused on React, Node/Express, Socket.IO, and WebRTC, with deeper questions for senior candidates.

## System Design and Architecture

1) Q: Outline a scalable chat architecture with WebRTC calls.
   A: Use REST for auth and initial data, Socket.IO for real-time events and signaling, a message broker (Redis/Kafka) for fan-out, and STUN/TURN for media. Store messages in MongoDB, cache user presence, and separate media uploads to object storage.

2) Q: How would you scale Socket.IO across multiple instances?
   A: Use sticky sessions at the load balancer and the Socket.IO Redis adapter for pub/sub so events reach the right clients regardless of instance.

3) Q: How do you prevent event storms in large rooms?
   A: Batch and debounce events, shard rooms, use server-side fan-out limits, and send diffs instead of full payloads.

4) Q: What is the role of signaling in WebRTC and why not use WebRTC for signaling?
   A: Signaling exchanges SDP and ICE; it can be done over any reliable channel. WebRTC needs signaling to establish itself, so it cannot bootstrap without external signaling.

## WebRTC Deep Dive

5) Q: Why might the call connect locally but fail across networks?
   A: NAT traversal issues, missing TURN, or blocked UDP. Use TURN and allow TCP/TLS fallback when needed.

6) Q: How do you handle renegotiation for screen sharing?
   A: Replace the video track using RTCRtpSender.replaceTrack; in some cases, trigger renegotiation if the codec or constraints change.

7) Q: How do you reduce echo and feedback?
   A: Use echo cancellation, noise suppression, and auto gain control in getUserMedia constraints. Keep local audio muted if necessary.

8) Q: What is trickle ICE and why is it preferred?
   A: It sends ICE candidates incrementally as they are discovered, reducing call setup time versus waiting for all candidates.

9) Q: How would you record calls?
   A: Use MediaRecorder on each peer, or record on a server by routing through an SFU that supports recording.

## Backend and API

10) Q: How do you secure file uploads in a chat app?
    A: Validate file types and size, scan for malware, store in cloud storage with signed URLs, and enforce auth on upload endpoints.

11) Q: How do you implement rate limiting for sockets?
    A: Track event counts per user/session with a sliding window and block or delay excessive events.

12) Q: How would you handle message delivery guarantees?
    A: Use message IDs, server acknowledgments, and retries with idempotent writes; for stronger guarantees, persist events in a queue.

13) Q: What is an idempotent endpoint and why is it important?
    A: It allows safe retries without creating duplicates, crucial for unreliable networks and client retries.

## Frontend and State Management

14) Q: How do you structure state for chat + calls?
    A: Separate concerns: chat store (messages, users) and call store (call status, streams, peer connection), and keep side effects encapsulated.

15) Q: How would you prevent React state updates from causing dropped frames during video?
    A: Minimize re-renders in call components, use refs for media elements, and avoid heavy UI updates during playback.

16) Q: What are the pitfalls of using useEffect for socket listeners?
    A: Double subscriptions, stale handlers, and missing cleanup. Prefer centralized socket bindings and stable callbacks.

## Testing and Quality

17) Q: How would you test a WebRTC feature?
    A: Unit test signaling logic, integration test with mocked RTCPeerConnection, and do end-to-end tests using two browsers in CI.

18) Q: What metrics do you monitor in production?
    A: Call setup time, failure rate, ICE connection state changes, average bitrate, packet loss, and socket disconnect rate.

## Production Concerns

19) Q: What changes are needed for production WebRTC?
    A: Add TURN servers, secure origins (HTTPS), set proper CORS, and enable device permissions handling with UI fallbacks.

20) Q: How do you handle versioned clients with sockets?
    A: Include a client version in the handshake and allow the server to branch behavior or reject incompatible clients.

21) Q: How do you handle offline or intermittent connections?
    A: Queue outgoing events, retry with backoff, and show a connection state indicator to the user.

## Senior-Level Scenarios

22) Q: You see high CPU usage on the client during calls. What do you do?
    A: Profile render loops, reduce resolution/bitrate, disable background filters, and ensure video elements are not re-mounted repeatedly.

23) Q: Messages are arriving out of order. How would you fix it?
    A: Attach server timestamps or sequence numbers and sort on display while preserving stable IDs.

24) Q: A subset of users cannot connect to calls. How do you debug?
    A: Check ICE states, validate TURN reachability, inspect SDP/ICE candidates, and compare network types (symmetric NAT, enterprise firewall).

25) Q: How would you add group calls later?
    A: Move to an SFU architecture, create per-room media routing, and manage per-peer subscriptions.
