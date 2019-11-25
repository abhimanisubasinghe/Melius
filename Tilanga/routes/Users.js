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
var adminId;
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
    var name = req.body.name;
    var DOB = req.body.DOB;
    var address = req.body.address;
    var contactNumber = req.body.contactNumber;
    var status = req.body.status;
    var dateOfEmployment = today;
    var password = req.body.password;
    var userId ;
    var username = req.body.username;
    var resultFinal;
    

    console.log(username);
    console.log(req.body.password);

    // const hash = bcrypt.hashSync(password, 10)
    //             password = hash;
    if(req.session.adminId){
        if(name && DOB && address && password && contactNumber && status && username){
            sql.query('SELECT userId FROM userlogin WHERE username = ?',[username],function(err1,result1){
                if(err1){
                    throw err1;
                }
                else{
                    if(result1.length>0){
                        res.send('already registered');
                    }
                    else{
                        sql.query('INSERT INTO user (name,DOB,address,contactNumber,dateOfEmployment,status) VALUES (?,?,?,?,?,?)',[name,DOB,address,contactNumber,dateOfEmployment,status], function(error,result){
                            if(error) throw error;
            
                             //res.sendFile(path.resolve('../views/home.html',{root:__dirname}));
                            //res.json("registered!!");
                            //res.json({data: result});
                            resultFinal = result;
                        });
    
                        bcrypt.hash(password, 10, function(err, hash){
                            sql.query('SELECT id FROM user WHERE name = ?',[name],function(err2,result2){
                                if(err2){
                                    console.log('tiltil');
                                    throw err2;
                                }
                                else{
                                    if(result2.length>0){
                                        console.log(result2[0].id);
                                        sql.query('INSERT INTO userlogin (userId,username,password) VALUES (?,?,?)',[result2[0].id,username,hash], function(error,result3){
                                            console.log("tilintilin");
                                            if(error){
                                                console.log('zzzzzzzzzzzzzzz');
                                                throw error;
                                            } 
                            
                                             //res.sendFile(path.resolve('../views/home.html',{root:__dirname}));
                                            //res.json("registered!!");
                                            res.json({data1: result3,resultFinal});
                                        });
                                    }
                                }
                            })
                        });
                    }
                }
            });
        }
        
        else{
            res.json({error: 'Fill all details!!'});
        }  
    }
    else{
        res.send('please log as an admin')
    }

    
});

//OPERATOR UPDATE(USER) BY ADMIN
users.post('/userUpdateByAdmin',function(req,res){
    var id = req.body.id;
    var name = req.body.name;
    var DOB = req.body.DOB;
    var address = req.body.address;
    var contactNumber = req.body.contactNumber;
    var status = req.body.status;
    //var dateOfEmployment = today;
    var password = req.body.password;
    var userId ;
    var username = req.body.username;
    var resultFinal;

    var password = req.body.password;
    if(req.session.adminId){
        if(id && name && DOB && address && password && contactNumber && status && username){
            bcrypt.hash(password, 10, function(err, hash){
                sql.query('UPDATE user SET name = ?, DOB = ?, address = ?, contactNumber = ?, status = ? WHERE id = ? ',[name,DOB,address,contactNumber,status,id], function(err, result){
                    if (err) {
                        throw err;
                    }
                    else{
                        //res.send("Updated successful");
                        //res.json({data: result});
                        resultFinal = result;
                    }

                });
                sql.query('UPDATE userlogin SET username = ?, password = ? WHERE userId = ?',[username,hash,id],function(err1,result1){
                    if(err1){
                        throw err1;
                    }
                    else{
                        res.json({data: resultFinal,result1});
                    }
                })
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

//PASSWORD AND USERNAME UPDATE BY USER
users.post('/userUpdateByUser',function(req,res){
    var username = req.body.username;
    var password = req.body.password
    if(req.session.userId){
        if(username && password){
            sql.query('SELECT userId FROM userlogin WHERE username = ?',[username],function(err1,result1){
                if(err1){
                    throw err1;
                }
                else{
                    if(result1.length>0){
                        bcrypt.hash(password, 10, function(err, hash){
                            sql.query('UPDATE userlogin SET password = ? WHERE username = ? ',[hash,username],function(err2,result2){
                                if(err2){
                                    throw err2;
                                }
                                else{
                                    res.json({data: result2});
                                }
                            })
                        });
                    }
                    else{
                        res.send("please enter valid username")
                    }
                }
            })
            
        }
        else{
            res.send('fill all the fields');
        }
    }
    else{
        res.send('please login first');
    }
});

//USER DELETE
users.post('/delete',function(req,res){
    
})


//LOGIN
users.post('/login', function(req,res){
     console.log('mmmmmmmmmmmmmmmmmmmm');
     //console.log(userData.password)
     console.log(req.body.username)
     console.log(req.body.password)
    if(req.body.username && req.body.password){
        console.log('jnvejnvejnv')
        var password = req.body.password;
        bcrypt.hash(password, 10, function(err, hash){
            sql.query("SELECT password FROM userlogin WHERE username = ? ",[req.body.username], function(err,result){
                if(err) throw err;
                else{
                    if(result.length>0){
                            req.session.userId = req.body.username;
                            id = req.session.userId;
                             console.log(id);
                            // //module.exports = id;
                            // console.log(id);
                            res.json('logged');
                            //res.redirect('/profile')
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
    console.log('tytytytytyty');
    if(req.session.userId){
        console.log('profile');
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