//EXPRESS
var express = require('express');
var app = express();
require('./src/nodejs/routes/routes')(app);
app.listen(8080);
console.log('Server is listening');

