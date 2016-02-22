# Theta S Playground

An experiment to access the theta s api using node.js.

# Some helpful docs
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
