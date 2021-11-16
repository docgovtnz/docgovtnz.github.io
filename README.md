# docgovtnz.github.io

This documentation portal is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

The end result is hosted on GitHub Pages and visible at <https://docgovtnz.github.io>.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Deployment is achieved automatically using GitHub Actions on pushes to the `main` branch. Authentication is done via a purposefully-created SSH deploy key: the public key is added to the repo as a deploy key, and the private key is injected to the build/deploy process as a repository secret.

The original keys are not retained, if the process needs to be changed new keys should be generated and the repository updated accordingly.

### Manual Process

```console
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
