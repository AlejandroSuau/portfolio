---
name: publish
description: Commit, push, and deploy the portfolio's pending changes so the live site at alejandrosuau.github.io/portfolio actually updates. Use this whenever the user says things like "publícame los cambios", "publica esto", "sube esto", "despliega los cambios", "publish the changes", "deploy this", or similar — they want the full git add/commit/push + npm run deploy flow run for them, not an explanation of the steps and not just a `git push`.
---

# Publish portfolio changes

This repo has two separate "publish" layers, and that distinction is the whole reason this
skill exists: pushing to `main` only updates the source on GitHub — it does **not** update
`https://alejandrosuau.github.io/portfolio/`. That site is served from the `gh-pages` branch,
which only changes when `npm run deploy` runs (it builds, then pushes `dist/` to `gh-pages`
via the `gh-pages` package). There's no GitHub Actions workflow doing this automatically. So
"publish" here always means both steps, every time — never just the git push.

The user has already authorized this whole flow in advance (see CLAUDE.md). The only thing
you still ask about each time is the commit message — everything else runs without further
confirmation, that's the point of this skill.

## Before touching git

1. Run `git status` and `git diff` (staged + unstaged) so you know what's actually changing.
   If there's nothing to commit, say so and stop here — don't run the rest for no reason.
2. Run `npm run lint` and `npm run build`. If either fails, stop and show the user the error
   instead of committing broken code. If the fix is small and obvious (an unused import, a
   typo), fix it and re-run; otherwise ask rather than guessing.
3. Ask the user what the commit should cover — a short description of what changed is
   enough, they don't need to dictate exact wording. Write the real message yourself:
   Spanish, imperative, short, matching the existing `git log` style (e.g. "Añade sección de
   experiencia", "Arregla alineación de botones en proyectos"). Don't switch to English just
   because part of the conversation happened in English.

## The flow

Run in order, and stop immediately if a step fails rather than continuing to the next one:

```bash
git add .
git commit -m "<message>"
git push
npm run deploy
```

Notes:

- `git add .` is intentional — the user asked for this explicitly instead of staging files
  one by one. Still glance at the `git status` output first: this is a static frontend repo
  with no backend, so there should never be a `.env`, credential file, or stray large binary
  in it. If something like that shows up, flag it to the user before adding it rather than
  silently committing it — that's the one case worth pausing for.
- Use a heredoc for the commit message so multi-line messages format correctly. Do **not**
  add a `Co-Authored-By: Claude` trailer (or any other AI-attribution line) — that's normally
  Claude Code's default, but the user explicitly asked for plain commit messages in this repo
  with no exceptions, so leave it off even though it'd otherwise be habit.
- `git push` pushes `main` to `origin`. If it's rejected (remote has commits this branch
  doesn't have), stop and tell the user — never force-push to make it go through.
- `npm run deploy` is the step that actually updates the live site (it runs `predeploy` →
  `vite build` → `gh-pages -d dist` automatically). It takes longer than the git commands;
  mention that it's running rather than going quiet.

## After it's done

Tell the user, plainly: what the commit message ended up being, that it's pushed, and that
`https://alejandrosuau.github.io/portfolio/` will reflect the change shortly (usually under a
minute, occasionally a bit more for GitHub Pages to catch up). If `npm run deploy` failed,
say that clearly and don't report the publish as done — a successful `git push` with a failed
deploy is not a successful publish.
