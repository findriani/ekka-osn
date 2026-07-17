CREATE TABLE IF NOT EXISTS attempts (
  id            TEXT PRIMARY KEY,
  bank_id       TEXT NOT NULL,
  bank_title    TEXT,
  student_name  TEXT NOT NULL,
  started_at    TEXT,
  submitted_at  TEXT NOT NULL,
  duration_sec  INTEGER,
  earned        REAL NOT NULL,
  total         REAL NOT NULL,
  percent       REAL NOT NULL,
  answers_json  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_attempts_submitted ON attempts (submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempts_bank      ON attempts (bank_id, submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempts_name      ON attempts (student_name);
