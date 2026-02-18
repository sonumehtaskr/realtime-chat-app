# Interview Foundations (Full-Stack Chat + WebRTC)

This file covers fundamentals useful for both mid and senior roles.

## JavaScript and Browser Basics

1) Q: Explain the event loop and why it matters for real-time apps.
   A: The event loop coordinates macrotasks (timers, I/O) and microtasks (Promises) so the UI stays responsive. Real-time apps rely on non-blocking I/O; heavy synchronous work blocks sockets and rendering, causing dropped events and jank.

2) Q: What is the difference between microtasks and macrotasks?
   A: Microtasks (Promise callbacks, queueMicrotask) run after the current call stack before the next macrotask; macrotasks are scheduled per event loop tick (setTimeout, I/O). Microtasks can starve rendering if overused.

3) Q: How do you avoid memory leaks in React?
   A: Cancel subscriptions, remove event listeners, and stop timers in cleanup functions. Avoid retaining closures with stale references, and ensure refs or state do not grow unbounded.

4) Q: What is CORS and why does it affect front-end to back-end communication?
   A: CORS is a browser security policy that restricts cross-origin requests. The server must return proper headers (Access-Control-Allow-Origin, credentials) for the browser to allow the response.

5) Q: Explain the difference between cookies and localStorage for auth.
   A: Cookies can be HTTP-only and sent automatically with requests, which reduces XSS risk for tokens. localStorage is accessible to JS and more vulnerable to XSS but is simple for SPAs.

## HTTP and WebSockets

6) Q: How do WebSockets differ from HTTP polling?
   A: WebSockets provide a persistent, full-duplex connection; polling opens repeated HTTP requests and has higher latency and overhead.

7) Q: Why might you still use REST endpoints in a real-time app?
   A: REST is good for initial data loads, auth, file uploads, and idempotent operations. WebSockets handle real-time updates and signaling.

8) Q: What is a handshake in Socket.IO?
   A: It is the initial connection step where transport is negotiated (polling to WebSocket), and metadata like auth or userId can be passed.

## WebRTC Fundamentals

9) Q: What problem does WebRTC solve in chat apps?
   A: It enables peer-to-peer audio/video and data channels with low latency, using STUN/TURN for NAT traversal.

10) Q: What are STUN and TURN servers used for?
    A: STUN helps discover a public-facing IP/port to enable direct peer connections. TURN relays media when direct connection fails.

11) Q: What is ICE and why is it needed?
    A: ICE (Interactive Connectivity Establishment) tries different network candidates to establish the best path between peers, handling NAT and firewall scenarios.

12) Q: Describe the WebRTC offer/answer flow.
    A: The caller creates an offer SDP and sends it over signaling. The callee sets it as remote, creates an answer SDP, and sends it back. Both sides exchange ICE candidates.

## React State and Data Flow

13) Q: Why use a global store like Zustand for chat state?
    A: It centralizes shared state (messages, selected user, socket) across components, avoids prop drilling, and simplifies real-time updates.

14) Q: How do you prevent stale closures in hooks?
    A: Include dependencies correctly, use functional updates, or move logic into the store. For sockets, clean up handlers on unmount.

15) Q: How do you structure optimistic UI for sending messages?
    A: Append a temporary message to state, send the request, then reconcile with server response or roll back on error.

## Databases and Models

16) Q: Why index userId and conversation fields in MongoDB?
    A: Indexing improves query performance for message histories and user lists, especially at scale.

17) Q: When would you use a separate messages collection versus embedding messages in a user document?
    A: Separate collections scale better and avoid document size limits; embedding is useful for small, bounded data.

## Security Basics

18) Q: Common real-time app security risks?
    A: Token leakage, unauthorized socket events, XSS in message rendering, and insecure file uploads.

19) Q: How do you secure Socket.IO events?
    A: Authenticate during connection, validate payloads, authorize per-room or per-user, and rate-limit critical events.

20) Q: Why sanitize user input in chat messages?
    A: To prevent XSS and HTML injection that can execute scripts in other users' browsers.

## Performance and Reliability

21) Q: How do you reduce client-side re-renders for chat lists?
    A: Use memoization, windowing/virtualization, and keep message arrays immutable but stable for unchanged items.

22) Q: How do you monitor WebRTC call quality?
    A: Use getStats to measure bitrate, packet loss, jitter, and round-trip time; expose metrics in logs or dashboards.

23) Q: When should you use a TURN server?
    A: In restrictive networks (enterprise, symmetric NAT) where P2P fails; TURN ensures connectivity but adds latency and cost.

24) Q: What is backpressure, and why does it matter for file uploads?
    A: It is the ability to slow data production when the receiver is overwhelmed. Without it, memory or bandwidth can spike.

## Behavioral and System Thinking

25) Q: How do you approach a real-time feature design?
    A: Define user flows, choose transport (REST vs socket), define event schemas, handle offline or retry, and add observability.

26) Q: What trade-offs exist between simplicity and scalability in a chat app?
    A: Simple single-server architectures are faster to build but struggle with scale; scaling requires message brokers, sharding, and distributed sockets.
