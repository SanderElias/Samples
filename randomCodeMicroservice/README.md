# Random Code Microservice

A tiny Node.js app designed to run in Podman or Docker.

## Run locally

```bash
node --experimental-strip-types server.ts
```

Then open:

- `http://localhost:3000/`
- `http://localhost:3000/health`
- `http://localhost:3000/generate`
- `http://localhost:3000/api/demo/rows`
- `http://localhost:3000/api/demo/patches`

## Demo data endpoints

- `GET /api/demo/rows` returns an array of 100 demo rows with string IDs.
- `GET /api/demo/patches` returns 1-5 patch rows per call:
  - each item is `{ id, changes }`
  - `changes` contains exactly 1 or 2 updated properties
  - changes are stateful and cumulative across calls

## Build with Docker

```bash
docker build -t random-code-microservice .
docker run --rm -p 3000:3000 random-code-microservice
```

## Build with Podman

```bash
podman build -t random-code-microservice .
podman run --rm -p 3000:3000 random-code-microservice
```

This image uses the newest distroless, non-root Node base that is actually available and published: `gcr.io/distroless/nodejs24-debian12:nonroot`.

The app listens on port `3000` by default and can be overridden with the `PORT` environment variable.
