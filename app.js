var fs = require('fs');
var OscClientClass = require('osc-client').OscClient;

var domain = '192.168.1.1';
var port = '80';
var client = new OscClientClass(domain, port);
var sessionId;
var filename;

// console.log(client.listImages({entryCount:5, maxSize:10, includeThumb:false}));

// console.log(client._listAll({entryCount:1, sort:"newest"}));
// client.listImages({entryCount:1, maxSize:1, includeThumb:'False'}).then(function(res){

// #TODO: Does not work, try using exact code from the README file to simply replicate ability of that code to take a picture. Then modify to listall. Hypothesis why below code doesn't work: sessionID is not required by ThetaS API but it is required by the osc js library so it's not resolving the "pending" state of the promise.

client.listImages({entryCount:'1', maxSize:'1'}).then(function(res){
  // code here;
  console.log('listImages block running');
  console.log(res.res.body.results);
  return res.res.body.results;
}).then(function(err){
  console.log('error block log');
  return 'error block return';
}).catch(function (error) {
  console.log('error error');
  console.log(error);
});
