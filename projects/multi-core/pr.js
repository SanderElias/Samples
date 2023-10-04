import {fork} from 'child_process';
import {join} from 'path';
import {Subject} from 'rxjs';
import {filter, first, map, take} from 'rxjs';
import {performance} from 'perf_hooks';

class Worker {
  #messages = new Subject();
  active = true;
  #errCount = 0;
  #lastTask = '';
  messages$ = this.#messages.pipe(
    /** filter out "system" messages, for now its only ready */
    filter(msg => !['ready'].includes(msg)),
    map(msg => ({worker: this, msg}))
  );
  #lastSend = {type: undefined, msg: undefined};
  #worker = undefined;
  constructor(task = `${process.cwd()}/test.js`) {
    this.#init(task);
  }
  get id() {
    return this.#worker.pid;
  }

  async send(type, msg) {
    if (!this.active) {
      throw new Error(`Trying to send to an inactive job`);
    }
    await this.ready;
    this.#worker.send([type, msg]);
    if (this.#lastSend.type !== type || this.#lastSend.msg !== msg) {
      this.#lastSend = {type, msg};
      this.#errCount = 0;
    }
  }

  #init(task = this.#lastTask) {
    this.#lastTask = task;
    const handleFault = source => msg => this.#clean({source, msg});
    this.active = true;
    this.#errCount = 0;
    this.#worker = fork(join(task));
    this.ready = this.#messages.pipe(first()).toPromise();
    this.#worker.on('message', msg => this.#messages.next(msg));
    this.#worker.on('error', handleFault('error'));
    this.#worker.on('close', handleFault('close'));
    this.#worker.on('disconnect', handleFault('disconnect'));
    this.#worker.on('exit', handleFault('exit'));
    // this.send('start')
  }

  async kill() {
    await this.send('kill');
    this.active = false;
    // this.#worker = undefined;
  }

  #debounceClean = undefined;
  #clean(msg) {
    if (this.#debounceClean) {
      clearTimeout(this.#debounceClean);
    }
    this.#debounceClean = setTimeout(async () => {
      this.#errCount += 1;
      try {
        this.#worker.kill();
      } catch {}
      if (this.#errCount > 3) {
        console.error(`Can't recover job, failed 3 times in a row. job is inactive now`);
        this.active = false;
        this.#worker = undefined;
      } else if (this.active) {
        this.#init();
        if (this.#lastSend) {
          this.send(this.#lastSend.type, this.#lastSend.msg);
        }
      }
      this.#debounceClean = undefined;
    }, 25);
  }
}

class job {
  pending = true;
  started = false;
  allowedTime = 2 * 60 * 1000;
  #done = undefined;
  #fail = undefined;
  /** default timeout time, job wil fail if not done whitin this time */
  done = new Promise((resolve, reject) => ((this.#done = resolve), (this.#fail = reject)));
  constructor(taskName, taskValue, trigger) {
    this.taskName = taskName;
    this.trigger = trigger;
    this.taskValue = taskValue;
  }
  startWithWorker(worker) {
    // console.log('started job');
    this.started = true;
    Promise.race([
      new Promise((_, r) => setTimeout(() => r(), this.allowedTime)),
      worker.messages$
        .pipe(
          filter(m => Array.isArray(m.msg) && m.msg[0] === this.trigger),
          map(({msg}) => msg),
          map(([trigger, ...rest]) => rest),
          // tap(r => console.log(r)),
          take(1)
        )
        .toPromise(),
    ])
      .then(r => this.#done(r))
      .catch(e => this.#fail(e));
    this.worker = worker;
    worker.send(this.taskName, this.taskValue);
    this.done.finally(() => {
      this.pending = false;
    });
  }
}

async function handleJobs(jobs, poolSize = 100) {
  const pool = Array.from({length: poolSize}, () => new Worker());
  let tasks = [];

  /** start max amount of initial jobs */
  const x = Math.min(pool.length, jobs.length);
  for (let i = 0; i < x; i += 1) {
    jobs[i].startWithWorker(pool[i]);
    tasks.push(jobs[i].done.then(() => jobs[i]));
  }

  let limit = tasks.length;
  while (jobs.some(j => j.pending)) {
    const jobDone = await Promise.race(tasks);
    // console.log({jobDone});
    const nextJob = jobs.find(row => row.pending && !row.started);
    if (nextJob) {
      // console.log('jobs scheduled:',++limit)
      nextJob.startWithWorker(jobDone.worker);
      jobDone.worker = undefined;
    }
    tasks = jobs.filter(row => row.pending && row.started).map(task => task.done.then(() => task));
  }

  await Promise.all(tasks);
  const done = await Promise.all(jobs.map(j => j.done));
  pool.forEach(worker => worker.kill());
  return done;
  // merge(...pool.map(w => w.messages$))
  //   .pipe(tap(m => console.log(m.worker.id, m.msg)))
  //   .subscribe();
}

const poolSize = 500;
const jobs = Array.from({length: 2500}, () => new job('block', 100, 'done'));
const start = performance.now();
handleJobs(jobs, poolSize).then(r => {
  const end = performance.now() - start;
  const iterations = r.reduce((sum, val) => (sum += +val), 0);
  const secs = Math.floor(end / 10) / 100;
  console.log(`
  -----------------------------------------------
  Done ${jobs.length} jobs in ${secs} seconden
  In this time I iterated ${iterations.toLocaleString()} times.

  That makes ${Math.floor((iterations/secs) ).toLocaleString()} iterations per second
  -----------------------------------------------
  `);
});

/*

async function initWorker(w: ChildProcess, pool: ChildProcess[]): Promise<ChildProcess> {
  return new Promise((res, rej) => {
    w.once('message', ev => {
      if (ev === 'done') {
        res(w);
      }
    });
    w.on('error', e => recycle(pool, w));
    w.on('close', e => recycle(pool, w));
    w.on('disconnect', () => recycle(pool, w));
    w.send(['config']);
  });
}

async function recycle(pool: ChildProcess[], worker: ChildProcess) {
  const index = pool.findIndex(row => row === worker);
  try {
    worker.kill();

  } catch {}
  if (index > -1) {
    console.log('removing....')
    pool.splice(index, 1);
  }
  const newWorker = fork(join(__dirname, './render_worker'));
  await initWorker(newWorker, pool);
  pool.push(newWorker);
}
*/
