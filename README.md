# Parcel Emoji Bug Reproduction

Parcel Issue: https://github.com/parcel-bundler/parcel/issues/10187

Get started with:

- `bun i` to install deps
- `bun run dev` to start the development server
  - you may need to run `bun watch` first to build an initial output in the `dist` dir before `bun start` can begin


## Bug:

Emoji (e.g. 👋) render incorrectly (`ðŸ‘‹`)

### Fix:

Add `<meta charSet="utf-8" />` to correctly handle the encoding!
