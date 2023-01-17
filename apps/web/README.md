# WhatWas?

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

### Docs

Prisma documentation is generated with
[prisma-docs-generator](https://github.com/pantharshit00/prisma-docs-generator).
To serve the docs locally, run `npm run docs:serve`.

## License

Licensed under the
[MIT license](https://github.com/what-was/whatwas/blob/main/LICENSE).
