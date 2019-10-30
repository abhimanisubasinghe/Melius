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
users.use(body.urlencoded({extended: false}));
users.use(cors());

var path = require('path');

//START PAGE
users.get('/',function(req,res){
    if(req.session.userId){
        res.send('already logged');
    }
    else{
        res.send('go to login page');
    }
})

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
        res.send('User does not exist!!');
    }
});

//CUSTOMER REGISTRATION
users.post('/customerRegistration',function(req,res){
//var id = req.body.customerId;
var name = req.body.customerName;
var nic = req.body.customerNIC;
var phone = req.body.phone;
var email = req.body.email;
var address = req.body.address;
var vehicles = req.body.noOfVehicle;
console.log(name);
    if(req.session.userId){
        if(name && nic && phone && email && address && vehicles){
            console.log('1111111111111111111');
            sql.query('SELECT customerName FROM customer WHERE customerNIC = ?',[nic],function(err,result){
                if(err) {
                    throw err;
                }
                else{
                    if(result.length>0){
                        res.send('customer already registered');
                    }
                    else{
                        sql.query('INSERT INTO customer (customerName,customerNIC,phone,email,address,noOfVehicle) VALUES (?,?,?,?,?,?)',[name,nic,phone,email,address,vehicles], function(error,result){
                            if(error){
                                throw error;
                            }
                            else{
                                res.send('register successful');
                            }
                        });
                    }
                }
            });
        }
    }
    else{
        res.send('please log');
    }
});

module.exports = users;