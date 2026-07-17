/* GET /api/attempts — every logged attempt, newest first. Teacher only.
 *
 * Auth is a single shared token in the TEACHER_TOKEN secret. That is
 * proportionate for a class of students and a table of practice scores; it is
 * not proportionate for anything you would call confidential.
 */

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });

/* Constant-time compare, so a wrong token can't be found one character at a
 * time by measuring how long the reply takes. */
function tokenMatches(given, expected) {
  const a = new TextEncoder().encode(given);
  const b = new TextEncoder().encode(expected);
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

export async function onRequestGet({ request, env }) {
  if (!env.TEACHER_TOKEN) {
    return json({ error: 'TEACHER_TOKEN is not configured on this deployment.' }, 500);
  }
  if (!env.DB) return json({ error: 'No database is bound to this deployment.' }, 500);

  const given = (request.headers.get('Authorization') ?? '').replace(/^Bearer\s+/i, '');
  if (!given || !tokenMatches(given, env.TEACHER_TOKEN)) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const url = new URL(request.url);
  const bank = url.searchParams.get('bank');
  const limit = Math.min(parseInt(url.searchParams.get('limit') ?? '500', 10) || 500, 2000);

  const sql = `
    SELECT id, bank_id, bank_title, student_name, started_at, submitted_at,
           duration_sec, earned, total, percent, answers_json
    FROM attempts
    ${bank ? 'WHERE bank_id = ?' : ''}
    ORDER BY submitted_at DESC
    LIMIT ?
  `;

  try {
    const stmt = bank
      ? env.DB.prepare(sql).bind(bank, limit)
      : env.DB.prepare(sql).bind(limit);

    const { results } = await stmt.all();

    return json({
      attempts: results.map(r => ({
        id: r.id,
        bankId: r.bank_id,
        bankTitle: r.bank_title,
        name: r.student_name,
        startedAt: r.started_at,
        submittedAt: r.submitted_at,
        durationSec: r.duration_sec,
        earned: r.earned,
        total: r.total,
        percent: r.percent,
        answers: JSON.parse(r.answers_json)
      }))
    });
  } catch (err) {
    console.error('Query failed:', err);
    return json({ error: 'Could not read the attempts.' }, 500);
  }
}
