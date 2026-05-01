// src/main.ts
(async function() {
  const { init } = await import("./plausible-Z26BOE66.js");
  init({
    domain: "samples.selias.dev",
    endpoint: "https://track.eliasweb.nl/track",
    outboundLinks: true,
    bindToWindow: false,
    captureOnLocalhost: true
  });
  await import("./bootspa-2GBHD5XG.js");
})();
