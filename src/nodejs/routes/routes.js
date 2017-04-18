var contextRoot = "/service";
var express = require('express');
var path = require('path');

module.exports = function(app){
    var controller = require('../controllers/controllers');
    app.get(contextRoot+'/test', controller.service);
}
