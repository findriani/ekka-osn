/* POST /api/log — record one completed attempt.
 *
 * Open by design: students are not authenticated, so anyone can post here.
 * The validation below keeps the table from being filled with junk, but this
 * endpoint is not a security boundary. Treat the log as a study record, not
 * as an exam result you would grade on.
 */

const LIMITS = { name: 80, id: 60, title: 200, answers: 100_000 };

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

function validate(a) {
  if (typeof a !== 'object' || a === null) return 'body must be an object';

  const name = String(a.name ?? '').trim();
  if (!name) return 'name is required';
  if (name.length > LIMITS.name) return 'name is too long';

  if (!a.bankId || String(a.bankId).length > LIMITS.id) return 'bankId is missing or too long';
  if (!Array.isArray(a.answers)) return 'answers must be an array';

  for (const k of ['earned', 'total', 'percent']) {
    if (typeof a[k] !== 'number' || !Number.isFinite(a[k])) return `${k} must be a number`;
  }
  if (a.total <= 0 || a.earned < 0 || a.earned > a.total) return 'score is out of range';

  const answers = JSON.stringify(a.answers);
  if (answers.length > LIMITS.answers) return 'answers payload is too large';

  return null;
}

export async function onRequestPost({ request, env }) {
  if (!env.DB) return json({ error: 'No database is bound to this deployment.' }, 500);

  let attempt;
  try {
    attempt = await request.json();
  } catch {
    return json({ error: 'Body was not valid JSON.' }, 400);
  }

  const problem = validate(attempt);
  if (problem) return json({ error: problem }, 400);

  const now = new Date().toISOString();

  try {
    await env.DB.prepare(`
      INSERT INTO attempts
        (id, bank_id, bank_title, student_name, started_at, submitted_at,
         duration_sec, earned, total, percent, answers_json)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      crypto.randomUUID(),
      String(attempt.bankId),
      String(attempt.bankTitle ?? '').slice(0, LIMITS.title),
      String(attempt.name).trim().slice(0, LIMITS.name),
      attempt.startedAt ?? null,
      // Server clock decides submission time — a student's device clock may be wrong.
      now,
      Number.isFinite(attempt.durationSec) ? Math.round(attempt.durationSec) : null,
      attempt.earned,
      attempt.total,
      attempt.percent,
      JSON.stringify(attempt.answers)
    ).run();
  } catch (err) {
    console.error('Insert failed:', err);
    return json({ error: 'Could not save the attempt.' }, 500);
  }

  return json({ ok: true, submittedAt: now });
}
