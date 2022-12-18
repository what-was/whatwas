## How to deploy WhatWas?

WhatWas? uses two GitHub Actions that handle automatically deploying our app to
Production and Staging environments. Prior to the first deployment, we'll need
to do a few things:

1. [Install Fly](https://fly.io/docs/getting-started/installing-flyctl/)

2. Sign up and Log in to Fly:

```sh
fly auth signup
```

3. Create two apps on Fly, one for staging and one for production:

```sh
fly apps create template-name
fly apps create template-name-staging
```

> **Note** Make sure this name matches the `app` set into `fly.toml` file.
> Otherwise, you will not be able to deploy.

4. Add a `FLY_API_TOKEN` to your GitHub repo. To do this, go to your user
   settings on Fly and create a new
   [token](https://web.fly.io/user/personal_access_tokens/new), then add it to
   [your repo secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
   with the name `FLY_API_TOKEN`.

5. Add a `SESSION_SECRET` to your fly app secrets, to do this you can run the
   following commands:

```sh
fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app template-name
fly secrets set SESSION_SECRET=$(openssl rand -hex 32) --app template-name-staging
```

> **Note** If you don't have openssl installed, you can also use
> [1password](https://1password.com/password-generator/) to generate a random
> secret, just replace `$(openssl rand -hex 32)` with the generated secret.

6. Create and attach a database for both your staging and production
   environments. Run the following:

```sh
fly postgres create --name template-name-db
fly postgres attach template-name-db

fly postgres create --name template-name-staging-db
fly postgres attach template-name-staging-db
```

> **Note** Fly will take care of setting the `DATABASE_URL` secret for you.

7. Set Fly.io secrets for the current template. Fill the required `.env`
   variables and run the following command in your console.

```sh
flyctl secrets set NODE_ENV=production ENCRYPTION_SECRET="" EMAIL_PROVIDER_API_KEY=
```

> **Note** Important❗️: `ENCRYPTION_SECRET=""` variable requires "" double
> quotes for some reason, otherwhise throws an Error at deploy time. Development
> variables has opted out from this command.

8. Now that everything is set up you can **commit and push** your changes to
   your repo.

> **Note** Every commit to your `main` branch will trigger a deployment to your
> production environment, and every commit to your `dev` branch will trigger a
> deployment to your staging environment.

### Done!

Return to main [WhatWas?](https://github.com/what-was/whatwas) repository.
