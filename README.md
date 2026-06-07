# GitProfile (rmishra96) — Recovery & Deployment Notes

This README section documents the git and deployment commands that were run during the repository recovery and GitHub Pages deployment. Many of these commands are destructive (force-push, branch deletion, removing the local .git), so use them carefully.

**Recovery & Deployment Commands**

- Inspect repository state:

  - `git status`
  - `git log --oneline --all`
  - `git fetch origin gh-pages`
  - `git show origin/gh-pages:index.html`

- Quick recovery (commit local changes and push to `main`):

  - `git add .`
  - `git commit -m "Recover all code after branch deletion - include config updates and resume documents"`
  - `git push origin main`

- Create a clean history (hard reset of history — irreversible):

  - `git checkout --orphan clean_history`
  - `git add -A`
  - `git commit -m "rmishra96 - Clean repository start (removed all template history)"`
  - `git branch -D main`
  - `git branch -m clean_history main`
  - `git push -f origin main`

- Deploy to GitHub Pages (automated via `gh-pages` package):

  - `npm install`
  - `npm run build`
  - `npm run deploy`  # runs `predeploy` -> `build` -> `gh-pages -d dist`
  - `git ls-remote --heads origin gh-pages`  # verify the gh-pages branch exists remotely

- Manual gh-pages creation (if automation fails):

  - `git checkout --orphan gh-pages`
  - `git rm -rf .`
  - Copy the built site files into the repository root. Example (PowerShell):

    - `Copy-Item dist/* . -Recurse -Force`

    or (bash):

    - `cp -r dist/* .`

  - `git add .`
  - `git commit -m "Deploy to gh-pages"`
  - `git push -f origin gh-pages`

- If the repository becomes corrupted or locked (advanced recovery):

  - Remove a stuck index lock (PowerShell): `Remove-Item .git/index.lock -Force`
  - If necessary, reinitialize the repo (this removes git history locally):

    - `Remove-Item .git -Recurse -Force`  # DESTRUCTIVE — removes local git history
    - `git init`
    - `git remote add origin https://github.com/<your-user>/<your-repo>.git`
    - `git add .`
    - `git commit -m "rmishra96 - Clean repository"`
    - `git branch -M main`
    - `git push -f origin main`

- Restore `src` and `public` from the original template repository:

  - `git clone --depth 1 https://github.com/arifszn/gitprofile.git gitprofile-template`
  - Copy template folders into project (PowerShell):

    - `Copy-Item .\\gitprofile-template\\src . -Recurse -Force`
    - `Copy-Item .\\gitprofile-template\\public . -Recurse -Force`

  - `git add src public`
  - `git commit -m "Restore src and public folders"`
  - `git push origin main`

**Notes & Warnings**

- `-f` / `--force` on `git push` replaces remote history — it is destructive.
- `git checkout --orphan` creates a new root commit without parents.
- Deleting `.git` or running `Remove-Item .git -Recurse -Force` is destructive and should only be used when you understand that local history will be lost.
- After deploying to `gh-pages`, ensure GitHub Pages settings point to branch `gh-pages` and folder `/`.

If you want, I can add this section into a different file or expand it with more context-specific notes (PowerShell vs bash examples, backups to keep before destructive steps, etc.).
