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
    
    console.log("name",name);
    console.log("DOB",DOB);
    console.log("phone",contactNumber);
    console.log("status",status);
    console.log("add",address);
    console.log("uname",username);
    console.log("pass",req.body.password);

    // const hash = bcrypt.hashSync(password, 10)
    //             password = hash;
    if(!req.session.adminId){
        if(name && DOB && address && password && contactNumber && status && username){
            sql.query('SELECT userId FROM userlogin WHERE username = ?',[username],function(err1,result1){
                if(err1){
                    throw err1;
                }
                else{
                    if(result1.length>0){
                        var state = false;
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
                                        sql.query('INSERT INTO userlogin (userId,username,password) VALUES (?,?,?)',[result2[0].id,username,password], function(error,result3){
                                            console.log("tilintilin");
                                            if(error){
                                                console.log('zzzzzzzzzzzzzzz');
                                                throw error;
                                            }
                                             else{
                                                if(result3){
                                                    var state = true;
                                                    res.json({result3,resultFinal,state});
                                                }
                                            }
                                                
                                             //res.sendFile(path.resolve('../views/home.html',{root:__dirname}));
                                            //res.json("registered!!");
                                            
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
            var state = false;
            res.send({error: 'Fill all details!!',state});
        }  
    }
    else{
        var state = false;
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
    var username = req.body.username;
    var resultFinal;
    console.log("fifoefaefrawiorawlriekailriea");
    console.log("id",id);
    console.log("name",name);
    console.log("DOB",DOB);
    console.log("address",address);
    console.log("c#",contactNumber);
    console.log("status",status);
    console.log("password",password);
    console.log("userna",username);

    //var password = req.body.password;
    if(!req.session.adminId){
        if(id && name && DOB && address && password && contactNumber && status && username){
            bcrypt.hash(password, 10, function(err, hash){
                sql.query('UPDATE user SET name = ?, DOB = ?, address = ?, contactNumber = ?, status = ? WHERE id = ? ',[name,DOB,address,contactNumber,status,id], function(err, result){
                    if (err) {
                        console.log("Error in updating");
                        throw err;
                    }
                    else{
                        sql.query('UPDATE userlogin SET username = ?, password = ? WHERE userId = ?',[username,hash,id],function(err1,result1){
                            if(err1){

                                throw err1;
                            }
                            else{
                                if(result1){
                                    console.log("update success");
                                    //res.send("Updated successful");
                                    //res.json({data: result});
                                    console.log("res",result);
                                    resultFinal = result;
                                    res.json(result);
                                    //var state = true;
                                    //var done= "updated";
                                    //res.send({state,done});
                                }
                                else{
                                    res.send('update not done');
                                }
                            }
                        })
                        
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
    if(!req.session.userId){
        if(username && password){
            sql.query('SELECT userId FROM userlogin WHERE username = ?',[username],function(err1,result1){
                if(err1){
                    throw err1;
                }
                else{
                    if(result1.length>0){
                        bcrypt.hash(password, 10, function(err, hash){
                            sql.query('UPDATE userlogin SET password = ? WHERE username = ? ',[password,username],function(err2,result2){
                                if(err2){
                                    throw err2;
                                }
                                else{
                                    if(result2.length>0){
                                        var state = true;
                                        res.json({state,result2});
                                    }
                                    else{
                                        res.send('not update')
                                    }
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
    console.log("bajioae");
    var username = req.body.username;
    if(!req.session.adminId){
        sql.query('select * from userlogin where username = ?',[username],function(err,result){
            if(err){
                console.log('deleteusererr1');
                console.log(err);
                throw err;
            }
            else{
                if(result[0].userId){
                    sql.query('delete from userlogin where username = ?',[username],function(err2,result2){
                        if(err2){
                            console.log('userdeleteerr2');
                            console.log(err2);
                            throw err2;
                        }
                        else{
                            if(result2){
                                sql.query('delete from user where id = ?',[result[0].userId],function(err3,result3){
                                    if(err3){
                                        console.log('deleteusererr3');
                                        console.log(err3);
                                        throw err3;
                                    }
                                    else{
                                        if(result3){
                                            var state = true;
                                            var message = 'deleted';
                                            res.send({state,message});
                                        }
                                        else{
                                            res.send('try again');
                                        }
                                    }
                                })
                            }
                            else{
                                res.send('try again');
                            }
                        }
                    })
                }
                else{
                    res.send('cannot find user')
                }
            }
        })
    }
})


//LOGIN
users.post('/login', function(req,res){
    var state;
    var res1;
    var res3;
    var password = req.body.password;
    var username = req.body.username;
     console.log(req.body.username)
     console.log(req.body.password)
    if(req.body.username && req.body.password){
        console.log('jnvejnvejnv')
        
        sql.query('select * from userlogin where username = ?',[username],function(err,result){
            console.log(result)
            if(err){
                console.log('dlogusererr1');
                console.log(err);
                throw err;
            }
            else{
                if(result.length>0){
                    console.log("dataHave",result)
                if(result[0].status > 0 ){
                    bcrypt.compare(password,result[0].password,function(err2,result2){
                        if(err2){
                            console.log('userloginerr2');
                            console.log(err2);
                            throw err2;
                        }
                        else{
                            if(result2 == true){
                                req.session.userId = username;
                                exports = req.session.userId
                                sql.query('select * from user where id = ?',[result[0].userId],function(err3,result3){
                                    if(err3){
                                        console.log('login err3')
                                        console.log(err3);
                                        throw err3
                                    }
                                    else{
                                        if(result3.length>0){
                                            res.status
                                            state = true;
                                            var res1 = result[0];
                                            var res2 = result3[0];
                                            console.log('xxxxx')
                                            console.log(res1)
                                            console.log(res2);
                                            console.log('qqqqqq');
                                            //res.status({state,res2});
                                            res.send({res2,res1,state});
                                        }
                                        else{
                                            res.send('try again');
                                        }
                                    }
                                })
                            }
                            else{
                                res.send('wrong data');
                            }
                        }
                    })
                }
                else{
                    //
                    bcrypt.compare(password,result[0].password,function(err4,result4){
                        if(err4){
                            console.log('userloginerr4');
                            console.log(err4);
                            throw err4;
                        }
                        else{
                            if(result4 == true){
                                req.session.adminId = username;
                                exports = req.session.adminId;
                                console.log('qqqbvejvb',req.session.adminId)
                                sql.query('select * from user where id = ?',[result[0].userId],function(err5,result5){
                                    if(err5){
                                        console.log('login err5')
                                        console.log(err5);
                                        throw err5
                                    }
                                    else{
                                        if(result5.length>0){
                                            res.status
                                            state = true;
                                            var res1 = result[0];
                                            var res2 = result5[0];
                                            console.log('xxxxx11')
                                            console.log(res1)
                                            console.log(res2);
                                            console.log('qqqqqq111');
                                            //res.status({state,res2});
                                            res.send({res2,res1,state});
                                        }
                                        else{
                                            res.send('try again');
                                        }
                                    }
                                })
                            }
                            else{
                                res.send('wrong data');
                            }
                        }
                    })
                }
                }
                else{
                    console.log('wrong data')
                    res.send('wrong data');
                }
            }
        })

        
    }
    else{
        res.send('fill all fields'); 
    }
});

//USER VIEW
users.get('/viewUser',function(req,res){
    if(!req.session.userId || !req.session.adminId){
        sql.query('select * from user inner join userLogin on user.Id = userLogin.userId;',function(err,result){
            if(err){
                console.log('err viewuser')
                console.log(err);
                throw err;
            }
            else{
                if(result.length>0){
                    //var state = true;
                    //var res1 = result[0];
                    res.json(result);
                    //res.send({state, res1});
                }
                else{
                    console.log('not work');
                }
            }
        })
    }
    else{
        res.send('please log');
    }
})

//SINGLE USER VIEW
users.post('/search',function(req,res){
    console.log("foeiajfej");
    if(!req.session.userId || !req.session.adminId){
        var searchId = req.body.searchId;
        console.log(searchId);
        sql.query('select * from user inner join userLogin on user.Id = userLogin.userId WHERE userLogin.username = ?',[searchId],function(err,result){
            console.log(result);
            if(err){
                console.log('err viewuser')
                console.log(err);
                throw err;
            }
            else{
                if(result.length>0){
                    res.json(result);
                }
                else{
                    console.log('not work');
                }
            }
        })
    }
    else{
        res.send('please log');
    }
})

//SINGLE USER VIEW
users.post('/searchByName',function(req,res){
    console.log("foeiajfej");
    if(!req.session.userId || !req.session.adminId){
        var searchId = "%"+req.body.searchId+"%";
        console.log(searchId);
        sql.query('select * from user inner join userLogin on user.Id = userLogin.userId WHERE user.name LIKE ?',[searchId],function(err,result){
            console.log(result);
            if(err){
                console.log('err viewuser')
                console.log(err);
                throw err;
            }
            else{
                if(result.length>0){
                    //var state = true;
                    //var res1 = result[0];
                    res.json(result);
                    //res.send({state, res1});
                }
                else{
                    console.log('not work');
                    res.json(result);
                }
            }
        })
    }
    else{
        res.send('please log');
    }
})

//PROFILE
users.get('/profile', function(req,res){
    console.log('tytytytytyty');
    if(!req.session.userId){
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