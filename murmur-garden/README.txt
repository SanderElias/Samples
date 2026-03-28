Murmur Garden
=============

This folder is the scratchpad for the federated discussion idea we talked
through.

Conversation summary
--------------------

- The core idea is a Google Groups-like discussion space, but with threaded
  conversations and federation so it does not depend on one central host.
- ActivityPub looks like the best protocol fit for the main discussion layer.
- Lemmy is a useful open-source reference point for the forum-like side of the
  idea.
- Bridges to WhatsApp or SMS should be treated as optional adapters, not as the
  core of the system.
- Podman containers are the preferred deployment shape for the stack.
- PostgreSQL is the preferred database choice for the main application data.
- The web client should likely be Angular-based and styled with open-props.
- The client can stay static and be hosted by Caddy or even GitHub Pages.

Current direction
-----------------

Build a federated forum first, then add optional bridge services for selected
threads or communities.
