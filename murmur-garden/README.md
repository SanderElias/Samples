# Murmur Garden

Murmur Garden is a proposal for a federated discussion platform: a modern,
threaded community space that feels closer to Google Groups or a forum than to
chat, but without depending on a single host.

It is designed for communities that want:

- real threaded conversations
- local control over membership and moderation
- remote participation from trusted federated identities
- optional bridges into channels like WhatsApp or SMS
- a deployment model that stays simple and portable

## Why this matters

Most discussion tools force a tradeoff between control and reach. Centralized
platforms are easy to use, but they make you depend on one provider. Classic
forums give you control, but they do not naturally connect to the wider network.

Murmur Garden aims to bridge that gap.

It keeps the core community under your control while still allowing selected
users and communities to participate across the fediverse. That means you can
grow a discussion space that is:

- resilient
- independently hostable
- open to federation
- easier to integrate with existing ecosystems

## The product vision

The core experience is a polished discussion hub with:

- communities
- threads
- replies
- permissions
- moderation
- federation-aware identities

Around that core, the system can grow into a broader communications layer with
optional adapters for messaging platforms and other external channels.

## Preferred shape

- **Federation protocol:** ActivityPub
- **Runtime:** Podman containers
- **Database:** PostgreSQL
- **Web client:** Angular with open-props
- **Frontend hosting:** static hosting through Caddy or GitHub Pages

## Current direction

Build the forum-like discussion engine first, then add federation, then add
bridges. Keep the web client separate from the backend, and keep the backend
split into small services where that improves clarity and operational control.

## Project notes

The supporting notes in this folder expand the idea:

- `high-level-plan.txt`
- `object-model.md`
- `conversation-diagrams.md`
- `database-sketch.md`
- `index.md`

