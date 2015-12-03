# Node, Express, Sessions

Playing around with sessions in a simple web app.

  - Express - http://expressjs.com/en/index.html
  - Session - https://github.com/expressjs/session
  - Express Generator - https://github.com/petecoop/generator-express

### What it does

- Generates a session Id for you
- Persists Id between page refreshes
- Keeps a count of how many times you have loaded the page
- Allows you to enter form data and persists between page loads


### To run
gulp

Runs on localhost:3000


### Next steps

Sessions are stored in memory which means this won't work in production. There are other session stores we can use, including Redis and MongoDB. See here: https://github.com/expressjs/session#compatible-session-stores
