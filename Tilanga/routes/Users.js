'user strict';
var express = require('express');
var sql = require('../database/db');
var users = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
//var proxy = require('http-proxy-middleware');

var session;
users.use(ses({
    secret: "adcnskl;"
}));
users.use(body.json());
users.use(cors());

var path = require('path');
//REGISTER
users.post('/register', function(req,res){
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
        bcrypt.hash(password, 10, function(err, hash){
            sql.query('INSERT INTO users (first_name,last_name,email,password,created) VALUES (?,?,?,?,?)',[first_name,last_name,email,hash,created], function(error,result){
                if(error) throw error;

                 //res.sendFile(path.resolve('../views/home.html',{root:__dirname}));
                res.json("registered!!");
            });
        });
    }
    else{
        res.json({error: 'Fill all details!!'});
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
                            let token = jwt.sign(user.dataValue,process.env.SECRET_KEY,{
                                expiresIn  : 1440
                            }) ;
                            res.json({token: token});
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
        res.send('User does not exist!!');
    }
})

module.exports = users;