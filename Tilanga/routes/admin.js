var express = require('express');
var admin = express.Router();
var cors = require('cors');
var ses = require('express-session');
var body = require('body-parser');
var sql = require('../database/db');
var bcrypt = require('bcrypt');

admin.use(body.json());
admin.use(body.urlencoded({extended:false}));
admin.use(cors());

var path = require('path');
const TWO_HOUR = 1000*60*60*2;

var session;
admin.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

//START PAGE
admin.get('/',function(req,res){
    if(req.session.adminId){
        res.send('already logged');
    }
    else{
        //res.send('go to login page');
        res.redirect('please log');
    }
});

//ADMIN LOGIN
admin.post('/login',function(req,res){
    console.log(req.body.username);
    var username = req.body.username;
    var password = req.body.password;
    console.log(password)
    if(req.session.adminId){
        console.log('ll')
        res.send('already logged');
    }
    else{
        console.log('lllllllll')
        if(username && password){
            bcrypt.hash(password, 10, function(err, hash){
                //sql.query('SELECT adminId FROM admin WHERE username = ? AND password = ?',[username, hash],function(err,result){
                    sql.query('SELECT adminId FROM admin WHERE username = ? AND password = ?',[username, password],function(err,result){
                    if(err){
                        throw err;
                    }
                    else{
                        console.log('ooooooooooooo');
                        console.log(result)
                        if(result.length>0){
                            if(result[0].password == password){
                                req.session.adminId = username;
                                res.send('logged'); 
                            }
                            else{
                                res.send('wrong data')
                            }
                        }
                        else{
                            res.send('wrong data');
                            //res.send('User does not exist');
                        }
                        
                    }
                });
            })
            
        }
    }
});

//ADMIN UPDATE
admin.post('/update',function(req,res){
    var id = req.body.adminId;
    var username = req.body.username;
    var password = req.body.password;
    if(req.session.adminId){
        if(username && id && password){
            sql.query('SELECT username FROM admin WHERE adminId = ?',[id],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result.length>0){
                        bcrypt.hash(password, 10, function(err, hash){
                            sql.query('UPDATE admin SET username = ? , password = ? WHERE adminId = ?',[username,password,id],function(err1,result1){
                                if(err1){
                                    throw err1;
                                }
                                else{
                                    res.send('updated');
                                }
                            })
                        });
                        
                    }
                    else{
                        res.send('Unknown admin');
                    }
                }
            })
        }
    }
    else{
        res.send('Please log as an admin');
    }
});


//ADMIN LOGOUT
admin.get('/logout', function (req, res) {
    req.session.destroy();
    res.send('Logout');
    res.end('/');
   });

module.exports = admin;