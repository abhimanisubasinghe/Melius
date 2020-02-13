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

//Admin Registration
admin.post('/adminreg',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    console.log(password);
    console.log(username);

    if(password && username){
        console.log('aa');
        sql.query('select adminId from admin where username = ?',[username],function(err,result){
            if(err){
                console.log('admidregerr1');
                console.log(err);
                throw err;
            }
            else{
                if(!result.length>0){
                    bcrypt.hash(password, 10, function(err2, hash){
                        if(err2){
                            console.log("adminregerr2");
                            console.log(err2);
                            throw err2;
                        }
                        else{
                            sql.query('insert into admin (username,password) values (?,?)',[username,hash],function(err3,result){
                                if(err3){
                                    console.log("adminregerr3");
                                    console.log(err3);
                                    throw err3;
                                }
                                else{
                                    res.send('admin registered');
                                }
                            })
                        }
                    });
                }
                else{
                    res.send('all ready registered');
                }
            }
        })
    }
})

    

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
            sql.query('select password from admin where username = ?',[username],function(err,result){
                if(err){
                    console.log('adminloginerr1');
                    console.log(err);
                    throw err;
                }
                else{
                    if(result[0].password){
                        console.log(result[0],password)
                        bcrypt.hash(password,10,function(er,hash){
                            console.log('aaaaa',hash);
                        })
                        bcrypt.compare(password, result[0].password,function(err2,result2){
                            if(err2){
                                console.log('adminlogerr2');
                                console.log(err2);
                                throw err;
                            }
                            else{
                                if(result2 == true){
                                    req.session.adminId = username
                                    res.send('logged as admin');
                                }
                                else{
                                    res.send('user name or password incorrect');
                                }
                            }
                        })
                    }
                }
            });
        }
        else{
            res.send('fill all details');
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