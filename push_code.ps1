
$ErrorActionPreference = "Stop"
try {
    git remote remove origin
}
catch {
    # Ignore error if origin doesn't exist
}
git remote add origin https://github.com/MOHIT29-dev/Mohit_Portfolio
git branch -M main
git push -u origin main
