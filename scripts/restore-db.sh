#!/usr/bin/env bash
# Restores a backup created by ./scripts/backup-db.sh into the running
# `it-roadmap-db` postgres container. Existing data is dropped (--clean
# in pg_dump emits DROP statements first).
#
# Usage:
#   ./scripts/restore-db.sh ./backups/it-roadmap-YYYYMMDDTHHMMSSZ.sql.gz

set -euo pipefail

FILE="${1:-}"
if [[ -z "$FILE" ]]; then
  echo "usage: $0 path/to/backup.sql.gz" >&2
  exit 1
fi
if [[ ! -f "$FILE" ]]; then
  echo "× backup file not found: $FILE" >&2
  exit 1
fi

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

echo "[restore] this will OVERWRITE the current $POSTGRES_DB database."
read -r -p "  Continue? [y/N] " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "[restore] aborted."
  exit 0
fi

echo "[restore] streaming $FILE into it-roadmap-db..."
gunzip -c "$FILE" | docker exec -i -e PGPASSWORD="$POSTGRES_PASSWORD" it-roadmap-db \
  psql --username="$POSTGRES_USER" --dbname="$POSTGRES_DB" --quiet

echo "[restore] done."
