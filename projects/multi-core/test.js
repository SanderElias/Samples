let count = 0;
let running = false;

const doThat = () => {
  process.send(`${++count} say's hi`);
  if (Math.random() * 1000 < 10) {
    throw new Error('randomNess is a thing');
    // process.exit(1);
  }
  running && setTimeout(() => doThat(), Math.random() * 500);
};

if (process.send) {
  const handlers = {
    start: () => {
      if (!running) {
        running = true;
        doThat();
      }
    },
    stop: () => {
      running = false;
    },
    block: async time => {
      const end = Date.now() + time;
      let count = 0;
      while (Date.now() < end) {
        count += 1;
      }
      process.send(['done', count]);
    },
    err: e => {
      console.log(e);
    },
    kill: () => {
      process.exit(0);
    },
  };


  process.on('message', async ([cmd, ...rest]) => {
      handlers[cmd](...rest);
  });

  process.send('ready');
} else {
  throw new Error('meant to be run as a child process');
}
