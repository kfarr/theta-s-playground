var fs = require('fs');
var ThetaSOscClientClass = require('osc-client-theta_s').ThetaSOscClient;

// http://192.168.1.1:80/osc/commands/execute
var domain = '192.168.1.1';
var port = '80';
// var client = new OscClientClass(domain, port);
// var sessionId;
var filename;

console.log("------------ STARTING METHOD 1 - _thetaClient API");




var _thetaClient = new ThetaSOscClientClass();
var _sessionId;
var sessionId;

// 1. Get session-id
_thetaClient.startSession().then(function(res){
  sessionId = res.body.results.sessionId;
  // 2. Change captureMode to "_video"
  return _thetaClient.setOptions(_sessionId, {captureMode:"_video"})
}).then(function(res){
  // 3. Start capturing
  return _thetaClient.listAll({entryCount:1, sort:"newest"});
}).catch(function (error) {
  console.log(error);
});


/*
// 1. Stop capturing
_thetaClient.stopCapture(_sessionId)
.then(function(res){
  // 2. Get list of contents in a device
  return _thetaClient.listAll({entryCount:1, sort:"newest"});
}).then(function(res){
  // 3. Download a movie
  return _thetaClient.getVideo(res.body.results.entries[0], "full");
}).then(function(res){
  // 4. Store the movie
  fs.writeFile(filename, res.body);
}).then(function(err){
  // 5. Close session
  return client.closeSession(sessionId);
}).catch(function (error) {
  console.log(error);
});
*/
console.log("------------ STARTING METHOD 2 - request lib");

var request = require('request');

request.post(
  'http://192.168.1.1:80/osc/commands/execute',
  { form: {"name": "camera._listAll",
      "parameters": {
      "entryCount": 5,
      "maxSize": 10,
      "includeThumb": false
      }
  }},
  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
