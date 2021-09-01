const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 80;

var key = fs.readFileSync('./cert/localhost-key.pem');
var cert = fs.readFileSync('./cert/localhost.pem');
var options = {
  key: key,
  cert: cert
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist/')); // za serviranje statične angular aplikacije

//import routes
const routes = require('./routes.js');

//register the route
routes(app);
/*
var server = https.createServer(options, app);

server.listen(port, ()=> {
    console.log(`Hello rest servis na portu: ${port}`);
});
*/
//http.createServer(app).listen(3000)
https.createServer(options, app).listen(3000);