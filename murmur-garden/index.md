# Murmur Garden index

Start here if you want the shortest route through the notes.

## Core files

- `README.md` — stakeholder-friendly overview and project pitch.
- `README.txt` — short summary of the idea and where it came from.
- `logo.svg` — the project mark.
- `high-level-plan.txt` — the architecture and rollout plan.
- `object-model.md` — plain-English explanation of the main entities.
- `conversation-diagrams.md` — Mermaid diagrams for the architecture and flow.
- `database-sketch.md` — early PostgreSQL table sketch and ER diagram.

## Recommended reading order

1. Read `README.md` for the overall pitch.
2. Read `README.txt` for context.
3. Look at `logo.svg` for the visual identity.
4. Read `high-level-plan.txt` for the architectural direction.
5. Read `object-model.md` to understand the nouns.
6. Read `conversation-diagrams.md` to see the moving parts.
7. Read `database-sketch.md` if you want to think about persistence.

## Current working idea

Federated discussion platform, likely ActivityPub-based, containerized with
Podman, using Angular + open-props for the client, PostgreSQL for storage, and
optional WhatsApp/SMS bridges later.
