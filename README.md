# SERVER STUFF

## TODO

* record lifetime and recent maxes per lift per user (use this to calculate weights)
* document the API
  * show what a particular method will expect in the body for posts

## Deployment

1. Assumptions: you have heroku account, have downloaded nodejs tools, and have ran `heroku login` if you need to (should only be once)
2. Deploy:
    1. commit and push your changes in app
    2. `npm run build:server` in app
    3. commit and push your changes in server
    4. `git push heroku master`
    5. if necessary, change `.env` configs temporarily to the heroku DB settings, and run the DB seed operations
    6. `heroku open`
    7. Profit!