# WAI PAI

Wai pai is a lightweight publishing platform for everything from micro-blogging, todo lists, code snippets, recipes, journaling — whatever you need it to be. No bloated CMS or social media dumpster fires. Just a place to jot down ideas, stash away notes, or express yourself in peace.

Each accounts' content is private by default, but can be shared publicly to their profile.

In Maori, "wai pai" translates to _good water_.

## Requirements

- Node.js with NPM or Yarn (for running a React app)
- (optional) Docker & PostgreSQL for local development

## Authentication

Authentication is handled with an Auth0 integration. To setup authentication:

1. Create a new application at Auth0. Update the values in `.env`. Create an auth0 API to generate an "audience". This is required to have Auth0 return a full JWT and not just an access token.
2. Under "Rules" in the Auth0 dashboard, create rules for each of the functions in `server/auth.js`. This will allow Hasura user info to be passed in the header and keep your users table in sync with Auth0.

**NOTE**: You may have issue connecting to you local docker server from Auth0. To get around this, I am using `ngrok` to expose a tunnel. To connect Auth0 to your localhost via a tunnel, start the ngrok server and copy/paste the generated URL into your Auth0 rule for inserting users. See below for more details on authentication.

## Local Development

```console
$ git clone git@github.com:evanheisler/waipai.git && cd waipai
$ yarn
$ cp .env.example .env
```

Hasura can run in whatever environment you are most comfortable. Pick a starting point from their [quickstart](https://hasura.io/docs/1.0/graphql/manual/getting-started/docker-simple.html).

To develop against a hosted server like Heroku all you need to do is use your heroku app address for the API variable in `.env`.

If you prefer to use a local instance of Hasura and an existing (or outside of Docker) PostgreSQL db, confirm that `docker` and `psql` are running, then:

```console
$ cd server
$ cp docker-run.sh.example docker-run.sh // update database_url with your name, password and database instance.
$ ./docker-run.sh
$ hasura migrate apply --endpoint http://localhost:8080 --admin-secret <local secret from env> // provisions local database the first time
```

### Start the client

```console
$ yarn start
```

### Start the Hasura console:

```console
$ cd server && hasura console --admin-secret <secret used in script>
```

### Authentication (optional)

If you've configured Auth0, aign up and logging in/out will work locally, but users will not be added to your local database — they will only exist in Auth0. I recommend running `ngrok` to seed a couple user accounts so there is an ID attached to posts.

```console
$ npm install ngrok -g
$ ngrok http 8080
```

You should now have a server at http://localhost:9695/api-explorer and a web client at http://localhost:3000.

## Running Tests

## Deployment

Frontend: Previews will be generated with pull requests via webhooks. Tagged releases will create production builds.

Backend: Run migrations with `cd server && hasura migrate apply --endpoint http://your-prod-instance.herokuapp.com --admin-secret '<heroku admin secret>'` (requires heroku cli login)
