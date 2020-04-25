# WAI PAI

Wai pai is a lightweight publishing platform for everything from micro-blogging, todo lists, code snippets, recipes, journaling — whatever you need it to be. No bloated CMS or social media dumpster fires. Just a place to jot down ideas, stash away notes, or express yourself in peace.

Each accounts' content is private by default, but can be shared publicly to their profile.

In Maori, "wai pai" translates to _good water_.

## Requirements

- Node.js with NPM or Yarn (for running a React app)
- (optional) Docker & PostgreSQL for local development

## Quickstart

Head over to [Hasura's website](https://hasura.io/) and follow their 30 second Heroku setup

```bash
$ git clone git@github.com:evanheisler/waipai.git && cd waipai
$ yarn
$ cp .env.example .env // update API variable to your heroku instance
```

```bash
$ yarn start
```

## Authentication

Authentication is handled with an Auth0 integration. To setup authentication:

1. Create a new application at Auth0. Update the values in `.env`. Create an auth0 API to generate an "audience". This is required to have Auth0 return a full JWT and not just an access token.
2. Under "Rules" in the Auth0 dashboard, create rules for each of the functions in `server/auth.js`. This will allow Hasura user info to be passed in the header and keep your users table in sync with Auth0.

**NOTE**: You may have issue connecting to you local docker server from Auth0. To get around this, I am using `ngrok` to expose a tunnel.

## Local Development

These steps will give you a local setup, as opposed to developing against a Heroku instance.

Follow the Quickstart steps, but for your `.env` API variable, use `http://localhost:8080/v1/graphql`. Confirm that `docker` and `psql` are running, then:

```bash
$ cd server
$ cp docker-run.sh.example docker-run.sh // update database_url with your name, password and database instance. TODO: get JWT cert
$ ./docker-run.sh
$ docker ps // confirm Hasura container is running
$ hasura migrate apply --endpoint http://localhost:8080 // provisions local database the first time
```

```bash
cd server && hasura console --admin-secret <secret used in script>

// optional, for authentication
./ngrok http 8080 // use the https address in your auth0 "create" rule
```

You should now have a server at http://localhost:9695/api-explorer and a web client at http://localhost:3000.

## Running Tests

## Deployment

Frontend: Previews will be generated with pull requests via webhooks. Tagged releases will create production builds.

Backend: Run migrations with `cd server && hasura migrate apply --endpoint http://your-prod-instance.herokuapp.com --admin-secret '<heroku admin secret>'` (requires heroku cli login)
