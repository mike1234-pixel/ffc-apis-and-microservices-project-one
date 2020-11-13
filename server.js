// server.js
// where your node app starts

// init project
var express = require('express');
var moment = require("moment");
var app = express();
var dotenv = require("dotenv").config({ path: './.env '});

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Basic Configuration 
var port = process.env.PORT || 3000;

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// request present time
app.get("/api/timestamp", (req, res) => {
  var utcNow = new Date();
  let nowUnixTime = Date.parse(utcNow);
  res.send({"unix": nowUnixTime, "utc": utcNow});
})

// request specified time
app.get("/api/timestamp/:time", (req, res) => {

  // 1. access route parameter ✔
  let userTime = req.params.time;

   let isValid = /(\d{4})-(\d{2})-(\d{2})/.test(userTime) || /^[0-9]+$/.test(userTime);
  // case: invalid date ✔
   if (isValid === false) {
     res.send({"error": "Invalid Date"})
   } else {
  // case: utc-string ✔
     if (/(\d{4})-(\d{2})-(\d{2})/.test(userTime) === true) {
  console.log(userTime);
  let utc = moment.utc(userTime);
  let unixTime = Date.parse(utc);
  let formattedUtc = utc.format("ddd, D MMM YYYY HH:mm:ss z");
  res.send({"unix": unixTime ,"utc": formattedUtc});
  // case: unix date ✔
  } else {
  let utc = moment.unix(userTime); 
  let formattedUtc = utc.format("ddd, D MMM YYYY HH:mm:ss z");
  res.send({"unix": userTime ,"utc": formattedUtc});
  }
  }
})

// listen for requests :)
app.listen(port, function () {
  console.log('Node.js listening on port...' + port);
});