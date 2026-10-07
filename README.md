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
gitignored and written by CI from the `FIREBASE_CONFIG` secret.
