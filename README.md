# OptumRX Challenge Node Backend

- A RESTful microservice written in TypeScript to pair with the OptumRX UI challenge.

## Do Not Use Real Information - No Encryption Utilized

- <details><summary>Click to Show Do Not Use Real Information
    </summary>
    
    ```bash
    # do not use real information
    # there is no encryption
    ```

    </details>

## Running the App with Docker Composer for Windows

- <details><summary>Click to Show Docker Command</summary>

  - Command:

    ```Docker
    # Run Following Command in Terminal from Directory Containing Docker File:

    docker-compose up --build
    ```

  </details>

## Running the App Locally After Cloning Repository

- <details><summary>Click to Show Requirements</summary>

  - Requirements:

    - [NodeJS](https://nodejs.org/en/) installed. <br>

    - Configure required environment variables in a .env file in /src directory

        <details><summary>Click to Show .env File Details</summary>

      ```bash
        # create .env file from terminal in /src
        $ touch .env

        # .env file example configuration:

        # (Required) Set app listening port:
        APP_PORT=8080
        # (Required) Set app URI versioning prefix:
        API_PREFIX=v1
        # (Optional) Set app listening address:
        APP_URI=localhost
        # (Optional) Set app CORS handling:
        CORS_ENABLED=false
        # (Optional) Set app environment name:
        NODE_ENV=local
      ```

        </details>

    - Run NPM Script

        <details><summary>Click to Show Script Details</summary>

      ```bash
        # from terminal in /src directory
        $ npm run start
      ```

        </details>

</details>

## Interacting With Application via REST Client (Postman or Insomnia)

- <details><summary>Click to Show Examples</summary>

  - Examples:

    - HTTP POST method of JSON type with body:

      <details><summary>Click to Show Body Example</summary>

      ```JSON
      {
        "firstName": "Lorem",
        "lastName": "Ipsum",
        "email": "loremipsum@optumrx.com",
        "password": "foobar"
      }
      ```

      </details>

    - On GET, Application health check URI returns status code of 200.

      <details><summary>Click to Show Response Code Example</summary>

      ```Node
        const response = res.status(200).send("Health Check Performed")
      ```

      </details>

    - On POST, Application has 70% chance of delivering a Success Response (HTTP Status Codes: >= 200)

      <details><summary>Click to Show Success Response Example</summary>

      ```JSON
      {
        "status": {
          "code": 205,
          "message": "Tells the user-agent to reset the document which sent this request."
        },
        "submission": {
          "firstName": "Lorem",
          "lastName": "Ipsum",
          "email": "wubalubadubdub@randm.com",
          "password": "ScronchMyFamily"
        }
      }
      ```

      </details>

    - On POST, Application has 30% of delivering an Error Response

      <details><summary>Click to Show Server Error Response Example</summary>

      ```JSON
      {
        "status": {
          "code": 506,
          "message": "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process."
        },
        "submission": {
          "firstName": "Rick",
          "lastName": "Sanchez",
          "email": "wubalubadubdub@RickAndMorty.com",
          "password": "WhoIsTheEvilMorty"
        }
      }
      ```

      </details>

    - On POST, If Error Response, application has a 50/50 chance of delivering a User Error Response (HTTP Status Codes: >= 400) or a Server Error Response (HTTP Status Codes: >= 500)

        <details><summary>Click to Show User Error Response Example</summary>

      ```JSON
      {
        "status": {
          "code": 405,
          "message": "The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code."
        },
        "submission": {
          "firstName": "Rick",
          "lastName": "Sanchez",
          "email": "wubalubadubdub@RickAndMorty.com",
          "password": "WhoIsTheEvilMorty"
        }
      }
      ```

        </details>

</details>

## Link For Heroku Hosted Application for REST Client Interactions

- <details><summary>Click to Show Heroku URI's</summary>

  - URI for Heroku Service:

    ```Node
    POST: https://optumrx-challenge-backend-node.herokuapp.com/v1/signup
    Healthcheck GET: https://optumrx-challenge-backend-node.herokuapp.com/v1/health
    ```

  - URI Default When Ran Locally:

    ```Node
    POST: localhost:8080/{version prefix specified in ENV injection}/signup
    Healthcheck GET: localhost:8080/{version prefix specified in ENV injection}/health
    ```

</details>
