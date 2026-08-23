// src/main.ts
(async function() {
  const { init } = await import("./plausible-AFPWALKL.js");
  init({
    domain: "samples.selias.dev",
    endpoint: "https://track.eliasweb.nl/track",
    outboundLinks: true,
    bindToWindow: false,
    captureOnLocalhost: true
  });
  await import("./bootspa-V7VQCPNA.js");
})();
