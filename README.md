# SERVER STUFF

## TODO

* record lifetime and recent maxes per lift per user (use this to calculate weights when going from program -> new logs)
* document the API
  * show what a particular method will expect in the body for posts

## Deployment

1. Assumptions: you have heroku account, have downloaded nodejs tools, and have ran `heroku login` if you need to (should only be once)
2. Deploy:
    1. delete public folder in server
    2. `git pull heroku master` in server
    3. commit and push your changes in app
    4. `npm run build:server` in app
    5. commit and push your changes in server
    6. `git push heroku master`
    7. if you want to run DB seed operations on the heroku site, change `.env` configs temporarily to the heroku DB settings in the server locally, and then run `npm run db-load-all` or whichever db script that you want to run
    8. `heroku open`
    9. Profit!