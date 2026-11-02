# My Personal Website

My personal website is located at https://www.aminhassani.com

## Instructions

### Local Development

To develop locally use:

```bash
yarn dev
```

and open the given localhost URL.

### Optimized Build

To build use:

```bash
yarn build
```

The static site is written to `dist/`, which Firebase Hosting serves. Preview it
with `yarn preview`.

### Editing content

Most content lives in typed data files rather than in the pages:

- `src/data/resume.ts`: work history, education, and skills.
- `src/data/impossible.ts`: the impossible list. Add a `done` note to cross a
  goal off.
- `src/data/site.ts`: name, top-bar links, and social profiles.

### Analytics

Firebase Analytics loads only when `src/firebase.config.ts` exists. It is
gitignored and written by CI from the `FIREBASE_CONFIG` secret. That config still
belongs to the old project, `personal-website-c9eaf`, so Analytics keeps
collecting there while Hosting runs on `aminhassani-prd`.

### Deployment

The site runs on Firebase Hosting in the `aminhassani-prd` project.

- **Pull requests:** each PR from this repo deploys to a preview channel, and its
  URL is posted on the PR.
- **Merges:** a `feat:`, `fix:` or `perf:` commit on `main` cuts a release, which
  builds and deploys the site. Other commits deploy nothing. A release only pushes
  a `v*` tag, so `package.json` on `main` keeps its old version and previews show
  it; the live build gets the new one.
- **Authentication:** GitHub Actions signs in through Workload Identity Federation,
  which replaced the old service account key.

The Terraform and the runbook, including the DNS swap for
`www.aminhassani.com`, are in [`infra/README.md`](infra/README.md).
