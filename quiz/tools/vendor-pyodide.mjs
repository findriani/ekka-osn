/* Copies the Pyodide runtime out of node_modules into public/assets/pyodide/.
 *
 *   npm run vendor:pyodide
 *
 * Same reasoning as the vendored KaTeX: the site must not depend on a CDN. A
 * blocked or slow jsDelivr would not degrade the code drills, it would kill
 * them outright.
 *
 * Only the files Pyodide actually fetches at boot are copied. The .map files
 * (~2 MB) and the TypeScript typings are for developing Pyodide itself, not
 * for running it, so they stay out of the repo.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(here, '../node_modules/pyodide');
const OUT = path.resolve(here, '../public/assets/pyodide');

/* pyodide.mjs is the loader; it fetches the other three by name at runtime.
 * pyodide-lock.json is read during boot even when no packages are loaded. */
const NEEDED = [
  'pyodide.mjs',
  'pyodide.asm.mjs',
  'pyodide.asm.wasm',
  'python_stdlib.zip',
  'pyodide-lock.json'
];

if (!fs.existsSync(SRC)) {
  console.error('pyodide is not installed. Run: npm install');
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });

let total = 0;
for (const f of NEEDED) {
  const from = path.join(SRC, f);
  if (!fs.existsSync(from)) {
    console.error(`Missing ${f} in node_modules/pyodide — did the package layout change?`);
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(OUT, f));
  const kb = Math.round(fs.statSync(from).size / 1024);
  total += kb;
  console.log(`  ${String(kb).padStart(5)} KB  ${f}`);
}

const version = JSON.parse(fs.readFileSync(path.join(SRC, 'package.json'), 'utf8')).version;
fs.writeFileSync(path.join(OUT, 'VERSION'), `pyodide ${version}\n`);

console.log(`\nVendored pyodide ${version} -> public/assets/pyodide/  (${(total / 1024).toFixed(1)} MB)`);
