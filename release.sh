# Parse arguments for dry-run and bump type
DRY_RUN=false
BUMP_TYPE="--patch" # default bump type

while [[ $# -gt 0 ]]; do
  case "$1" in
    -d|--dry-run)
      DRY_RUN=true
      shift
      ;;
    --major|--minor|--patch)
      BUMP_TYPE="$1"
      shift
      ;;
    *)
      shift
      ;;
  esac
done

SEMVER_BIN=$(which semver)

if [ -z "$SEMVER_BIN" ]; then
  echo "Error: 'semver' command not found. Please install it and try again."
  exit 1
fi

# Get the latest semantic version tag (sorted as versions, not lexicographically)
LATEST_TAG=$(git tag --list | grep -E '^[0-9]+\.[0-9]+\.[0-9]+$' | sort -V | tail -n 1)

# Increment the version using semver tool based on bump type
if [ -n "$LATEST_TAG" ]; then
  NEXT_VERSION=$($SEMVER_BIN $BUMP_TYPE "$LATEST_TAG")
else
  # If no tags exist, start at 1.0.0
  NEXT_VERSION="1.0.0"
fi

if [ "$DRY_RUN" = true ]; then
  if [ -n "$LATEST_TAG" ]; then
    echo "[DRY RUN] Current version: $LATEST_TAG"
  else
    echo "[DRY RUN] No previous version tag found."
  fi
  echo "[DRY RUN] Next version would be: $NEXT_VERSION"
else
  git tag "$NEXT_VERSION";
  echo "Updated current release to $NEXT_VERSION."
fi
