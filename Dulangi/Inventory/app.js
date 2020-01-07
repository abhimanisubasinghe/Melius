var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//var logger = require('morgan');
//var expressValidator = require('express-validator');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = ('./lib/db');

var itemRouter = require('./routes/item');
var itemTransRouter = require('./routes/transfer');
var reorderRouter = require('./routes/reorder');

var app = express();

var cors = require('cors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());


//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: '123456cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());
//app.use(expressValidator());

app.use('/items', itemRouter);
app.use('/transfer', itemTransRouter);
app.use('/reorder', reorderRouter);



app.listen(process.env.PORT || '5000', () => {

    console.log(`Server is running on port : ${process.env.PORT || '5000'}`)
});