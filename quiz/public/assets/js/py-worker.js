/* Runs a student's Python in Pyodide, off the main thread.
 *
 * This MUST be a worker. Pyodide executes Python synchronously, so a stray
 * `while True:` on the main thread would freeze the tab with no way out. In a
 * worker the page stays alive and can terminate() the whole thing — which is
 * the only reliable way to stop runaway CPython, since Python code cannot be
 * interrupted from outside once it is running.
 *
 * Protocol
 *   in : { id, code, tests: string[] }
 *   out: { type: 'ready' }
 *        { type: 'done', id, fatal, results: [{test, pass, error}], stdout }
 *
 * No packages are ever loaded, so `import numpy` raises ModuleNotFoundError.
 * That is deliberate: the 2025 preselection forbade third-party libraries, and
 * an error she can read teaches the rule better than an honour system.
 */

import { loadPyodide } from '../pyodide/pyodide.mjs';

const HARNESS = `
import io, json, contextlib, traceback

_BATAS_KELUARAN = 4000   # cukup untuk debug, tidak cukup untuk membanjiri pesan

def _ringkas(e):
    """Pesan galat satu baris, mis. "ZeroDivisionError: division by zero"."""
    return "".join(traceback.format_exception_only(type(e), e)).strip()

def _baris_siswa(e):
    """Nomor baris terakhir yang berada di dalam kode siswa, kalau ada.

    Traceback penuh akan memperlihatkan isi harness ini, yang bukan salahnya
    dan hanya membingungkan. Jadi hanya frame dari "kodemu.py" yang dilaporkan.
    """
    for f in reversed(traceback.extract_tb(e.__traceback__)):
        if f.filename == "kodemu.py":
            return f.lineno
    return None

def _jalankan(kode, ujian):
    ns = {}
    keluaran = io.StringIO()
    hasil = []

    try:
        with contextlib.redirect_stdout(keluaran), contextlib.redirect_stderr(keluaran):
            exec(compile(kode, "kodemu.py", "exec"), ns)
    except BaseException as e:
        baris = _baris_siswa(e)
        pesan = _ringkas(e)
        return json.dumps({
            "fatal": pesan + (f"  (baris {baris})" if baris else ""),
            "results": [],
            "stdout": keluaran.getvalue()[:_BATAS_KELUARAN]
        })

    for t in ujian:
        try:
            with contextlib.redirect_stdout(keluaran), contextlib.redirect_stderr(keluaran):
                nilai = eval(compile(t, "kodemu.py", "eval"), ns)
            hasil.append({"test": t, "pass": nilai is True, "error": None})
        except BaseException as e:
            hasil.append({"test": t, "pass": False, "error": _ringkas(e)})

    return json.dumps({
        "fatal": None,
        "results": hasil,
        "stdout": keluaran.getvalue()[:_BATAS_KELUARAN]
    })
`;

let pyodide = null;
let jalankan = null;

async function boot() {
  pyodide = await loadPyodide({ indexURL: new URL('../pyodide/', import.meta.url).href });
  pyodide.runPython(HARNESS);
  jalankan = pyodide.globals.get('_jalankan');
  postMessage({ type: 'ready' });
}

boot().catch(err => postMessage({ type: 'ready', bootError: String(err) }));

onmessage = e => {
  const { id, code, tests } = e.data;

  if (!jalankan) {
    postMessage({ type: 'done', id, fatal: 'Python belum siap.', results: [], stdout: '' });
    return;
  }

  let raw;
  try {
    // The harness catches Python-level errors itself; this only fires if the
    // interpreter state is broken, e.g. after a MemoryError.
    raw = jalankan(code, pyodide.toPy(tests));
  } catch (err) {
    postMessage({ type: 'done', id, fatal: `Gagal menjalankan: ${err}`, results: [], stdout: '' });
    return;
  }

  postMessage({ type: 'done', id, ...JSON.parse(raw) });
};
