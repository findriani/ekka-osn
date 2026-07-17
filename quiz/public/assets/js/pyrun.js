/* Main-thread owner of the Python worker.
 *
 *   const runner = new PyRunner();
 *   runner.warm();                            // optional: start the ~13 MB boot early
 *   const r = await runner.run(code, tests);  // { fatal, results, stdout, timedOut }
 *
 * The timeout is the whole reason this file exists. Python running inside the
 * worker cannot be interrupted politely — there is no signal to send it — so
 * the only escape from `while True:` is to destroy the worker and build a new
 * one. That costs a reboot (a few seconds, served from HTTP cache), which is a
 * fair price for a case that should be rare and is worth showing her anyway.
 */

const BATAS_MS = 5000;

export class PyRunner {
  #worker = null;
  #ready = null;
  #seq = 0;

  /* Boot on demand. Called by run(), or early by warm() to hide the latency. */
  warm() {
    if (this.#ready) return this.#ready;

    this.#worker = new Worker(new URL('./py-worker.js', import.meta.url), { type: 'module' });

    this.#ready = new Promise((resolve, reject) => {
      const onReady = e => {
        if (e.data?.type !== 'ready') return;
        this.#worker.removeEventListener('message', onReady);
        e.data.bootError ? reject(new Error(e.data.bootError)) : resolve();
      };
      this.#worker.addEventListener('message', onReady);
      this.#worker.addEventListener('error', err => reject(new Error(err.message || 'worker gagal dimuat')));
    });

    return this.#ready;
  }

  #kill() {
    this.#worker?.terminate();
    this.#worker = null;
    this.#ready = null;
  }

  async run(code, tests) {
    try {
      await this.warm();
    } catch (err) {
      this.#kill();
      return { fatal: `Python gagal dimuat: ${err.message}`, results: [], stdout: '', timedOut: false };
    }

    const id = ++this.#seq;
    const worker = this.#worker;

    return new Promise(resolve => {
      const timer = setTimeout(() => {
        worker.removeEventListener('message', onDone);
        this.#kill();   // the only way to stop a runaway loop
        resolve({
          fatal: `Kode dihentikan setelah ${BATAS_MS / 1000} detik. ` +
                 `Biasanya ini berarti ada perulangan yang tidak pernah berhenti.`,
          results: [], stdout: '', timedOut: true
        });
      }, BATAS_MS);

      const onDone = e => {
        if (e.data?.type !== 'done' || e.data.id !== id) return;
        clearTimeout(timer);
        worker.removeEventListener('message', onDone);
        const { fatal, results, stdout } = e.data;
        resolve({ fatal, results, stdout, timedOut: false });
      };

      worker.addEventListener('message', onDone);
      worker.postMessage({ id, code, tests });
    });
  }
}
