var http = require('http');
var express = require('express');
var router = express();
var server = http.createServer(router);

router.get("/", function(req, res) {
  var ip = req.headers["x-forwarded-to"] || req.connection.remoteAddress;
  var lang = req.headers["accept-language"].substring(0, 5);
  var regexOS = /\((.*)\)/;
  var regexOS2 = /(.*)\)/;
  var os = regexOS.exec(req.headers["user-agent"]);
  os = os[1];
  os = regexOS2.exec(os);
  os = os[1];
  res.json({ipaddress: ip, language: lang, software: os});
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){});
