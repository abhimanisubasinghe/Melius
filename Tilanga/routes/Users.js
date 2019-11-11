'user strict';
var express = require('express');
var sql = require('../database/db');
var users = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
var cookieSession= require('cookie-session');
var cookieParser = require("cookie-parser");

const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
//var proxy = require('http-proxy-middleware');
const TWO_HOUR = 1000*60*60*2;


var session;
var id;
users.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));
users.use(body.json());
users.use(body.urlencoded({extended: false}));
users.use(cors());

var path = require('path');

//START PAGE
users.get('/',function(req,res){
    if(req.session.userId){
        res.send('already logged');
    }
    else{
        //res.send('go to login page');
        res.redirect('/login');
    }
})

//OPERATOR REGISTER
users.post('/registration', function(req,res){
console.log('jnvvjknvsjnvkjsnvkjsnvjk');

    var today = new Date();
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    var created = today;

    console.log(created);
    console.log(req.body.password);

    // const hash = bcrypt.hashSync(password, 10)
    //             password = hash;

    if(first_name && last_name && email && password){
        sql.query('SELECT first_name FROM users WHERE email = ?',[email],function(err1,result1){
            if(err1){
                throw err1;
            }
            else{
                if(result1.length>0){
                    res.send('already registered');
                }
                else{
                    bcrypt.hash(password, 10, function(err, hash){
                        sql.query('INSERT INTO users (first_name,last_name,email,password,created) VALUES (?,?,?,?,?)',[first_name,last_name,email,hash,created], function(error,result){
                            if(error) throw error;
            
                             //res.sendFile(path.resolve('../views/home.html',{root:__dirname}));
                            //res.json("registered!!");
                            res.json({data: result});
                        });
                    });
                }
            }
        });
    }
    else{
        res.json({error: 'Fill all details!!'});
    }  
});

//OPERATOR UPDATE(USER)
users.post('/userUpdate',function(req,res){
    var id = req.body.id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var password = req.body.password;
    if(req.session.userId){
        if(id && first_name && last_name && email && password ){
            bcrypt.hash(password, 10, function(err, hash){
                sql.query('UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ? ',[first_name,last_name,email,hash,id], function(err, result){
                    if (err) {
                        throw err;
                    }
                    else{
                        //res.send("Updated successful");
                        res.json({data: result});
                    }
                });
            });
        }
        else{
            res.send("Fill all details");
        }
    }
    else{
        res.send("please login");
    }
});


//LOGIN
users.post('/login', function(req,res){
     
    if(req.body.email && req.body.password){
        var password = req.body.password;
        bcrypt.hash(password, 10, function(err, hash){
            sql.query("SELECT password FROM users WHERE email = ? ",[req.body.email], function(err,result){
                if(err) throw err;
                else{
                    if(result.length>0){
                            req.session.userId = req.body.email;
                            id = req.session.userId;
                            // console.log(id);
                            // //module.exports = id;
                            // console.log(id);
                            res.json('logged');
                    }
                    else{
                        res.send('User does not exist')
                    }
                }
            })
        });
        
    }
    else{
        res.send('fill all fields'); 
    }
});

//PROFILE
users.get('/profile', function(req,res){
    if(req.session.userId){
        res.json('logged');
    }
    else{
        res.send('User does not exist!!');8
    }
});

//USER LOGOUT
users.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('Logout');
    res.end('/');
   });

module.exports = users;