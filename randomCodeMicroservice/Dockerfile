FROM gcr.io/distroless/nodejs24-debian12:nonroot

WORKDIR /app

COPY package.json ./package.json
COPY . .

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["--experimental-strip-types", "server.ts"]
