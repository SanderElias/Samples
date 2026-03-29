# Murmur Garden object model

This is the simplest way to think about the main pieces.

## People

### Local user

A person who signs in on your server.

Your server owns the account, handles login, and decides what that person can do
locally.

### Remote identity

A person from another federated server, like Mastodon.

Your server does not own this account. It just recognizes the remote actor ID
and decides what access to grant.

## Places

### Community

A discussion space, like a group or forum board.

Examples:
- "Announcements"
- "Book club"
- "Project ideas"

### Thread

A conversation inside a community.

Threads contain a root post and replies underneath it.

### Post

A single message in a thread.

A post can be public, limited to a community, or restricted further.

## Access

### Membership

The local permission a person has inside a community.

This is where you say things like:
- can read
- can reply
- can start threads
- can moderate

### Grant

A specific permission given to a local user or remote identity.

This is the part that lets you say, for example, "trust this Mastodon identity
for read access."

## Federation

### Actor

The ActivityPub identity object for a person or service.

Think of it as the network-visible identity that other servers can recognize.

### Inbox and outbox

The inbox receives incoming federated activity.

The outbox sends your local activity to other servers.

## Bridges

### Bridge target

An external channel like WhatsApp or SMS.

This is separate from federation. It is an adapter that mirrors selected
discussions into another system.

## Simple rule of thumb

- Local users authenticate on your server.
- Remote identities authenticate on their home server.
- Your server decides what each identity can do.
- Federation moves public or allowed activity between servers.
- Bridges are optional extras layered on top.

