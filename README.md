![GitHub-Mark-Light](https://raw.githubusercontent.com/dev-xo/dev-xo/main/whatwas/assets/images/Light.png#gh-light-mode-only)
![GitHub-Mark-Dark ](https://raw.githubusercontent.com/dev-xo/dev-xo/main/whatwas/assets/images/Dark.png#gh-dark-mode-only)

<p align="center">
  <p align="center">
    <a href="https://whatwas.fly.dev">Live Demo</a>
    ·
    <a href="https://twitter.com/DanielKanem">Twitter</a>
    <br/>
    <br/>
    A starter focused Remix Stack that integrates User Authentication, Forms validation and Testing. Driven by Prisma ORM. Deploys to Fly.io
  </p>
</p>

## Features

- [Fly app Deployment](https://fly.io) with
  [Docker.](https://www.docker.com/products/docker-desktop/)
- Database ORM with [Prisma.](https://www.prisma.io/)
- Production Ready with [SQLite](https://sqlite.org/index.html) and
  [PostgreSQL.](https://www.postgresql.org/)
- [GitHub Actions](https://github.com/features/actions) for Deploy on merge to
  Production and Staging environments.
- Healthcheck Endpoint for
  [Fly backups Region Fallbacks.](https://fly.io/docs/reference/configuration/#services-http_checks)
- Styling with [Tailwind.css](https://tailwindcss.com/) +
  [Tailwind Prettier-Plugin.](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- End-to-End testing with [Cypress.](https://www.cypress.io/how-it-works)
- Linting with [ESLint.](https://eslint.org/)
- Code formatting with [Prettier.](https://prettier.io/)
- Static Types with [TypeScript.](https://www.typescriptlang.org/)

### Implemented Features

- Authentication Ready with
  [Remix-Auth](https://www.npmjs.com/package/remix-auth) that includes:
  [Form Strategy.](https://github.com/sergiodxa/remix-auth-form)
- Flat Routes from
  [Remix Flat Routes.](https://github.com/kiliman/remix-flat-routes)
- Forms validation for Client and Server side with
  [Conform.](https://conform.guide/)
- Support for Javascript developers with continuous updates over time based on
  `remix.init`.

Learn more about [Remix Stacks](https://remix.run/stacks).

## Quickstart

Barebones Stack has support for multiple databases based on Prisma. The
installer will prompt a selector allowing you to choose the database your
project will run on. Deployment files will be updated matching the required
criteria to successfully deploy to Fly.io

To get started, run the following commands in your console:

```sh
# Initializes template in your workspace:
npx create-remix@latest --template dev-xo/whatwas

# Select the database your project will run on:
# > SQLite or PostgreSQL

# Starts dev server:
npm run dev
```

> Important❗️: Cloning the repository instead of initializing it with the above
> commands, will result in a inappropriate experience. This template uses
> `remix.init` to configure itself and prepare your environment.

## Development

Understanding our development workspace will keep us productive.

### Usage

Template can be used in the way you like. Feel free to remove all the HTML code
you don't need, keeping just the `loaders` and `actions` from Remix.

### Prisma Migrations

If your database choice was PostgreSQL, you will need to run Prisma migrations
with your Postgres client running on the background. In order to accomplish
this, remove the folder inside `/prisma` called `/migrations`, and run
`npx prisma migrate dev --name init` to properly setup them.

## Deployment

Barebones Stack has support for SQLite and PostgreSQL databases. In order to
keep a better track and an easier maintenance of each deployment documentation,
we moved each one to its own file.

Check
[SQLite DEPLOYMENT](https://github.com/dev-xo/dev-xo/blob/main/whatwas/docs/SQLITE-DEPLOYMENT.md)
or
[PostgreSQL DEPLOYMENT](https://github.com/dev-xo/dev-xo/blob/main/whatwas/docs/POSTGRESQL-DEPLOYMENT.md)
to get your app to production.

## GitHub Actions

GitHub Actions are used for continuous integration and deployment. Anything that
gets into the `main` branch will be deployed to production after running tests,
build, etc. Anything in the `dev` branch will be deployed to staging.

## Testing

### Playwright

We use Playwright for our End-to-End tests. You'll find those in `tests/e2e`
directory. To run your tests in development use `npm run test:e2e:dev`.

### Type Checking

WhatWas? uses TypeScript. It's recommended to get TypeScript set up for your
editor to get a really great in-editor experience with type checking and
auto-complete. To run type checking across the whole project use
`npm run typecheck`.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting. It's recommended to
install an editor plugin to get auto-formatting on save. There's also a
`npm run format` script you can run to format all files in the project.

Prettier settings are on `.package-json`.

## License

Licensed under the
[MIT license](https://github.com/what-was/whatwas/blob/main/LICENSE).
