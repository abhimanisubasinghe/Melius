var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const bcrypt = require('bcrypt');
//var proxy = require('http-proxy-middleware');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser( {extended: false} ));

var Users = require('./routes/Users');

app.use('/users', Users);

app.listen(3001, function(){
    console.log('server run on 3001 port!!');
});
