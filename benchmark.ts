export default class Benchmark {
  t0: number;
  t1: number;
  delta: number;

  constructor() {
    this.delta = 0;
  }

  start() {
    this.t0 = performance.now();
  }

  stop() {
    this.t1 = performance.now();
    this.delta = this.t1 - this.t0;
  }

  log() {
    console.log(`Execution took ${this.delta}`);
  }

  async run(fn: Function) {
    this.start();
    await fn();
    this.stop();
    this.log();
  }
}
