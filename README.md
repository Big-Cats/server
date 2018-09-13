# SERVER STUFF

## TODO

* record lifetime and recent maxes per lift per user (use this to calculate weights)
* document the API
  * show what a particular method will expect in the body for posts

## Deployment

1. Assumptions: you have heroku account, have downloaded nodejs tools, and have ran `heroku login` if you need to (should only be once)
2. Deploy:
    1. commit and push your changes in app
    2. `npm build:server` in app
    3. commit and push your changes in server
    4. `git push heroku master`
    5. `heroku open`
    6. Profit!