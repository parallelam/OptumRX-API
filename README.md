# OptumRX Challenge Node Backend

A RESTful microservice written in TypeScript to pair with the OptumRX UI challenge.

## Do Not Use Real Information - No Encryption Utilized

## Running the App with Docker Composer for Windows

- Run Following Command in Terminal from Directory Containing Docker Files:

```
docker-compose up --build
```

## Running the App Locally After Cloning Repository

- Requirements:

-- NodeJS Installed

-- Environment Variable Configuration in a .env file in ./src directory

-- Run CLI Script "npm run start" from ./src directory.

## Interacting With Application via REST Client (Postman or Insomnia)

- HTTP POST method of JSON type with body:

```
"firstName": "Lorem"
"lastName": "Ipsum"
"email": "loremipsum@optumrx.com"
"password": "foobar"
```

- On GET, Application health check URI returns status code of 200.

- On POST, Application has 70% chance of delivering a Success Response (HTTP Status Codes: >= 200)
- On POST, Application has 30% of delivering an Error Response
- On POST, If Error Response, application has a 50/50 chance of delivering a User Error Response (HTTP Status Codes: >= 400) or a Server Error Response (HTTP Status Codes: >= 500)

* Link For Heroku Hosted Application for REST Client Interactions:

```
POST: https://optumrx-challenge-backend-node.herokuapp.com/v1/signup
Healthcheck GET: https://optumrx-challenge-backend-node.herokuapp.com/v1/health
```

- URI Default When Ran Locally:

```
POST: localhost:8080/{version prefix specified in ENV injection}/signup
Healthcheck GET: localhost:8080/{version prefix specified in ENV injection}/health
```
