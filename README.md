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

## Local Development

These steps will give you a local setup, as opposed to developing against a Heroku instance.

Follow the Quickstart steps, but for your `.env` API variable, use `http://localhost:8080/v1/graphql`. Confirm that `docker` and `psql` are running, then:

```bash
$ cp docker-run.sh.example docker-run.sh // update database_url with your name, password and database instance
$ ./docker-run.sh
$ docker ps // confirm Hasura container is running
$ cd server
$ hasura migrate apply --endpoint http://localhost:8080
```

```bash
cd server && hasura console
```

You should now have a server at http://localhost:9695/api-explorer and a web client at http://localhost:3000.

## Running Tests

## Deployment

Frontend: Previews will be generated with pull requests via webhooks. Tagged releases will create production builds.

Backend: Run migrations with `hasura migrate apply --endpoint http://your-prod-instance.herokuapp.com` (requires heroku cli login)
