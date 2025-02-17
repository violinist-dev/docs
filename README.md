# docs.violinist.io
Documentation for Violinist

## Requirements

- NodeJS (Currently v22)
- npm

## Adding a new doc page

If the page is a configuration option, it should go inside `docs/configuration/`. If it's a general documentation page, place a new `mdx` (or `md`) file in the preferred location.

## Development mode

```
$ npm start
```

The docs will probably be available on [http://localhost:3000/](http://localhost:3000/)

## Build the docs

The docs are built automatically when you open a PR, and again on the default branch. So you do not need to incude any generated assets in your PR
