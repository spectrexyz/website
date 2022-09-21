# [spectre.xyz](https://spectre.xyz/) website

## Packages

- [website](./pkg/website): the Spectre website.
- [kit-legacy](./pkg/kit-legacy): old version of the toolkit, only used by the website.

## How to develop

This repository is using the [pnpm](https://pnpm.io/) package manager.

```
npm i -g pnpm # if not done already

pnpm i
cd  pkg/website && pnpm dev
cd  pkg/kit-legacy && pnpm dev
```
