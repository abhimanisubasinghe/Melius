var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const bcrypt = require('bcrypt');
var ses =  require('express-session'); 
//var proxy = require('http-proxy-middleware');
var cookieSession= require('cookie-session');
var cookieParser = require("cookie-parser");

var app = express();
const TWO_HOUR = 1000*60*60*2;


var session;
app.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(cookieParser("secretkey"));

//Setting up view engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

var Index = require('./routes/index');
var Users = require('./routes/Users');
var Customers = require('./routes/customer');
var Services = require('./routes/service');
var Admin = require('./routes/admin');

app.use('/',Index);
app.use('/users', Users);
app.use('/customers', Customers);
app.use('/services', Services);
app.use('/admin', Admin);

app.listen(5001, function(){
    console.log('server run on 5001 port!!');
});
