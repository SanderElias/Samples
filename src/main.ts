(async function () {
  const { init } = await import('@plausible-analytics/tracker');
  init({
    domain: 'samples.selias.dev',
    endpoint: 'https://track.eliasweb.nl/track',
    outboundLinks: true,
    bindToWindow: false,
    captureOnLocalhost: true,

  });

  await import('./bootspa');
})();
