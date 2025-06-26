########################################################
# Release script for the project
#
# Usage:
#   ./release.sh [--dry-run] [--major] [--minor] [--patch]
#
# Options:
#   --dry-run: Run the script without making any changes
########################################################

DRY_RUN=false
VERSION_BUMP="patch"

for arg in "$@"; do
  case $arg in
    --dry-run)
      DRY_RUN=true
      ;;
    --major)
      VERSION_BUMP="major"
      ;;
    --minor)
      VERSION_BUMP="minor"
      ;;
    --patch)
      VERSION_BUMP="patch"
      ;;
  esac
done

current_branch=$(git branch --show-current);
if [ "$current_branch" != "main" ]; then
    echo "You are not on the main branch";
    exit 1;
fi

if [ "$DRY_RUN" = true ]; then
  echo "[DRY RUN] git pull origin main"
else
  git pull origin main;
fi

if [ "$DRY_RUN" = true ]; then
  echo "[DRY RUN] npm run build"
  BUILD_STATUS=0
else
  npm run build;
  BUILD_STATUS=$?
fi

if [ $BUILD_STATUS -ne 0 ]; then
    echo "Build failed";
    exit 1;
fi

if [ "$DRY_RUN" = true ]; then
  echo "[DRY RUN] git push origin main"
else
  git push origin main;
fi

version=$(git tag | sort -V | tail -n 1);
if [ "$version" = "" ]; then
  echo "No version found";
  exit 2;
fi

version=$(tools/semver --$VERSION_BUMP $version);
echo "Bumping version to $version";


if [ "$DRY_RUN" = true ]; then
  echo "[DRY RUN] git tag -a \"$version\" -m \"Release $version\""
  echo "[DRY RUN] git push origin $version"
else
  git tag -a "$version" -m "Release $version";
  git push origin "$version"; 
fi

echo "Release complete";
