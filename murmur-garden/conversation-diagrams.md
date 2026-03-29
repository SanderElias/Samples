# Murmur Garden diagrams

These diagrams capture the parts of the idea that benefit from a visual model.

## 1. Overall shape

```mermaid
flowchart TB
  userA[Local user] --> browser[Angular web client]
  remoteUser[Remote identity]

  caddy[Caddy or static host] --> browser
  browser --> api[API service]
  api --> fed[Federation service]
  api --> worker[Worker service]
  api --> db[(PostgreSQL)]
  api --> mod[Moderation service]
  api --> bridge[Bridge service]

  fed <--> remote[Mastodon / ActivityPub servers]
  bridge <--> whatsapp[WhatsApp]
  bridge <--> sms[SMS]

  remoteUser --> fed
```

## 2. Trust and access

```mermaid
flowchart LR
  remoteUser[Remote user on mastodon.social] --> remoteServer[Home server authenticates user]
  remoteServer --> signedMsg[Signed ActivityPub message]
  signedMsg --> murmur[Murmur Garden server]
  murmur --> localGrant[Local permission / membership grant]
  localGrant --> allowed[Read / reply / moderate]

  localUser[Local user] --> localLogin[Local login on Murmur]
  localLogin --> murmur
  murmur --> publish[Publish federated activity]
  publish --> fediverse[Fediverse]
```

## 3. Threaded discussion model

```mermaid
flowchart TB
  community[Community]
  thread[Thread]
  post[Root post]
  reply1[Reply]
  reply2[Reply to reply]

  community --> thread --> post --> reply1 --> reply2
```

## 4. Bridge layer

```mermaid
flowchart TB
  thread[Selected thread or community] --> bridge[Bridge adapter]
  bridge --> whatsapp[WhatsApp channel]
  bridge --> sms[SMS channel]

  whatsapp --> bridge
  sms --> bridge
  bridge --> thread
```

## 5. Container-first deployment

```mermaid
flowchart LR
  caddy[Caddy or static host] --> ui[Angular static client]
  ui --> api[API service]
  api --> fed[Federation service]
  api --> worker[Worker service]
  api --> mod[Moderation service]
  api --> bridge[Bridge service]
  api --> db[(PostgreSQL)]
```
