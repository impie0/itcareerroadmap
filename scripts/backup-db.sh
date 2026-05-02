#!/usr/bin/env bash
# Dumps the postgres database from the `it-roadmap-db` container into a
# gzipped SQL file under ./backups/ (or whatever path you pass as $1).
#
# Usage:
#   ./scripts/backup-db.sh                  # writes to ./backups/
#   ./scripts/backup-db.sh /path/to/dir     # writes to a custom directory
#
# Restore the resulting file with:
#   ./scripts/restore-db.sh ./backups/it-roadmap-YYYYMMDDTHHMMSSZ.sql.gz

set -euo pipefail

# Load .env so we have POSTGRES_USER / POSTGRES_PASSWORD / POSTGRES_DB.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"
if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  set -a
  source "$ENV_FILE"
  set +a
fi

POSTGRES_USER="${POSTGRES_USER:-it_roadmap}"
POSTGRES_DB="${POSTGRES_DB:-it_roadmap}"
POSTGRES_PASSWORD="${POSTGRES_PASSWORD:?POSTGRES_PASSWORD must be set in .env}"

BACKUP_DIR="${1:-$SCRIPT_DIR/../backups}"
mkdir -p "$BACKUP_DIR"

TIMESTAMP=$(date -u +%Y%m%dT%H%M%SZ)
OUT="$BACKUP_DIR/it-roadmap-$TIMESTAMP.sql.gz"

echo "[backup] dumping $POSTGRES_DB from it-roadmap-db -> $OUT"

docker exec -e PGPASSWORD="$POSTGRES_PASSWORD" it-roadmap-db \
  pg_dump --username="$POSTGRES_USER" --dbname="$POSTGRES_DB" \
          --no-owner --no-privileges --clean --if-exists \
  | gzip -9 > "$OUT"

SIZE=$(du -h "$OUT" | cut -f1)
echo "[backup] wrote $OUT ($SIZE)"
