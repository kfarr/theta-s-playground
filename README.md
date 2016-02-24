# Theta S Playground
An experiment to access the theta s api using node.js.

# Using Theta S Playground
    git clone https://github.com/kfarr/theta-s-playground.git .
    npm install
    connect to the theta-s via your computer's wifi
    node app-theta.js

# Current state - FAIL
* neither osc-client nor osc-client-theta_s libraries appear to access the theta-s
* tried request library but not formatted correctly and error from theta-s is not specific
* need to use charles to inspect and compare the POST request between successful Postman vs. failed js "request" library (and other clients)

# Some helpful dev docs
* Example using CURL: http://qiita.com/FePlus/items/aaeca40468d49786e2f5
* Reference API: https://developers.theta360.com/en/docs/v2/api_reference/commands/camera.list_images.html
* Node adaptation: http://theta360developers.github.io/blog/javascript/2015/12/17/theta-s-nodejs.html

# Basic example of accessing Theta S (once connected via its wifi ad hoc network)
POST  http://192.168.1.1:80/osc/commands/execute

BODY
{
    "name": "camera.listImages",
    "parameters": {
        "entryCount": 5,
        "maxSize": 10,
        "includeThumb": false
    }
}
