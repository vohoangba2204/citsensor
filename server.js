var express = require('express');//khoi tao moduel express
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

var db = mongojs('mydb', ['sensor']);//db:test,colection:
var app = express();
var path = require('path');

app.use(bodyParser.json());//
app.use('/public', express.static('public'));
