# Full-Stack Interview Cheat Sheet

Concise notes that cover mid-to-senior topics plus foundations.

## JavaScript and Browser

- Event loop: sync stack, microtasks (Promise), macrotasks (timers, I/O).
- Avoid blocking: heavy sync code stalls sockets and UI.
- CORS: server must allow origin and credentials for cookies.
- Auth storage: HTTP-only cookies reduce XSS risk.

## React

- Keep socket subscriptions in one place; clean up on unmount.
- Use refs for media elements; avoid re-mounting video nodes.
- Global store: separate chat state from call state.

## Node/Express

- Validate payloads and auth for every socket event.
- Rate limit critical events to prevent abuse.
- Use REST for initial data and uploads; sockets for live updates.

## Socket.IO

- Handshake can include userId and token for auth.
- Scale with sticky sessions and Redis adapter.
- Always acknowledge critical events when reliability matters.

## WebRTC

- Signaling exchanges SDP (offer/answer) and ICE candidates.
- STUN discovers public candidates; TURN relays when direct fails.
- Trickle ICE reduces call setup time.
- Replace video track for screen share; renegotiate if codecs change.

## Debugging Calls

- Check ICE state changes and candidate types.
- Failures across networks usually need TURN.
- Use getStats for bitrate, packet loss, and RTT.

## Security

- Sanitize user messages to prevent XSS.
- Restrict upload types and sizes; store in cloud.
- Use HTTPS for media device access in production.

## Performance

- Virtualize long message lists.
- Throttle high-frequency events (typing indicators).
- Avoid re-rendering during active video playback.

## System Design

- Use message broker for fan-out at scale.
- Keep presence in cache; persist messages in DB.
- Plan for offline/poor network with retries and backoff.
