'user strict';
var express = require('express');
var sql = require('../database/db');
var inventory = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

const TWO_HOUR = 1000*60*60*2;
var session ;
var userId;
customers.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

inventory.use(body.json());
inventory.use(body.urlencoded({extended: false}));
inventory.use(cors());

var path = require('path');

inventory.get("/",function(req,res){
    
});