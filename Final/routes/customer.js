'user strict';
var express = require('express');
var sql = require('../database/db');
var customers = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
//var Promise = require('promise');
var user = require('./Users')

const All_customer = 'SELECT * FROM customer';

const TWO_HOUR = 1000*60*60*2;
var session;
var userId;
customers.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

customers.get('/customer',function(req,res){
    console.log('cccccccccccccc');
    sql.query(All_customer, function(err,result){
        if(err){
            return res.send(err);
        }
        else{
            console.log(result);
            return res.json({
                data: result
            })
        }
    })
})


//console.log(userId);

customers.use(body.json());
customers.use(body.urlencoded({extended: false}));
customers.use(cors());

var path = require('path');
/*
router.post('/add', function(req, res, next) {

    console.log("data");
    if (true) {

customers.get('/view',function(req,res){
    if(req.session.adminId){
        res.send('please log as an admin');
    }
    else{
        sql.query("SELECT * FROM customer",function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    res.json(result);
                }
                else{
                    res.json('No any services');
                }
            }
        });
    }
});

*/
//CUSTOMER REGISTRATION
customers.post('/customerRegistration',function(req,res){
    console.log('mmmmmmmmeeeeeeeeee')

    var name = req.body.name;
    //var NIC = req.body.NIC;
    var NIC = req.body.NIC;
    var fax = req.body.fax;
    var type = req.body.type;
    var email = req.body.email;
    var website = req.body.website;
    var address = req.body.address;
    var phoneNo = req.body.phoneNo;
    var DOB = req.body.DOB;
    var note = req.body.note;

    console.log('eeeeeeeeeeeeeeeeeeeee')
    console.log(name);
    console.log(NIC);
    console.log(fax);
    console.log(type);
    console.log(email);
    console.log(website);
    console.log(address);
    console.log(phoneNo);
    console.log(DOB);
    console.log(note);

  
    
    //console.log(req.session.userId);
   // console.log(phone);
    //console.log(req.session.userId);

       // if(req.session.userId)
        if(!req.session.userId)
        {
            if(name && fax && type && email && website && address && phoneNo && DOB && note){
                console.log('1111111111111111111');
                sql.query('SELECT name FROM customer WHERE NIC = ?',[NIC],function(err1,result1){
                    if(err1) {
                        throw err1;
                    }
                    else{
                        console.log('cffffffffffffff');
                        if(result1.length>0){
                            console.log('gggggg')
                            res.send('customer already registered');
                        }
                        else{
                            console.log('jnbvkjsbnvkjsbvkjsnbvkjbskjvbskjvn')
                            sql.query('INSERT INTO customer (name,NIC,fax,type,email,website,DOB,note) VALUES (?,?,?,?,?,?,?,?)',[name,NIC,fax,type,email,website,DOB,note], function(err2,result2){
                                if(err2){
                                    throw err2;
                                }
                                else{
                                    //res.send('register successful');
                                    if(result2){
                                        sql.query('select Id from customer where NIC = ?',[NIC],function(err3,result3){
                                            if(err3){
                                                throw err3;
                                            }
                                            else{
                                                if(result3.length>0){
                                                    console.log(result3[0])
                                                    sql.query('insert into customer_address (Id,address) values (?,?)',[result3[0].Id,address],function(err4,result4){
                                                        if(err4){
                                                            throw err4;
                                                        }
                                                        else{
                                                            if(result4){
                                                                sql.query('insert into customer_phone (Id,phoneNo) values (?,?)',[result3[0].Id,phoneNo],function(err5,result5){
                                                                    if(err5){
                                                                        throw err5;
                                                                    }else{
                                                                        if(result5){
                                                                            console.log("plz")
                                                                            sql.query('select count(Id)  as count from customer',function(err6,result6){
                                                                                console.log("plzzzz")
                                                                                            if(err6){
                                                                                                    throw err6;                                                                                    console.log("plzzzz")


                                                                                            }else{
                                                                                                if(result6){
                                                                                                    console.log(result6);
                                                                                                    var state = true;
                                                                                                    var message = "registered successfull";
                                                                                                    res.send({message,state});

                                                                                                }
                                                                                                
                                                                                            }
                                                                            })
                                                                          
                                                                        }
                                                                        else{
                                                                            res.send('phone number not inserted')
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                            else{
                                                                res.send('not registered id phone address');
                                                            }
                                                        }
                                                    })
                                                }
                                                else{
                                                    res.send('address not inserted')
                                                }
                                            }
                                        })
                                    }
                                    else{
                                        res.send('not registered');                                   }
                                    
                                }
                            });
                        }
                    }
                });
            }
            else{
                console.log('all datanot fill')
                res.send('fill all field');
            }
        }
        else{
            res.send('please log');
        }
    });
    
    //CUSTOMER DATA UPDATE
    customers.post('/customerUpdate',function(req,res){
        console.log("magula")
    
        var Id = req.body.Id;
        var name = req.body.name;
        var NIC = req.body.NIC;
        var fax = req.body.fax;
        var type = req.body.type;
        var email = req.body.email;
        var website = req.body.website;
        var address = req.body.address;
        var phoneNo = req.body.phoneNo;
        var DOB = req.body.DOB;
        var note = req.body.note;
        if(!req.session.userId){
            if(Id && name && NIC && fax && type && email  && website && address && phoneNo && DOB && note ){
                sql.query('UPDATE customer SET Id = ? ,name = ?,NIC = ? , fax = ?,type = ?, email = ?,website = ? ,address =? , phoneNo = ?, DOB =?, note= ? WHERE Id = ? AND NIC = ? ',[Id,name,NIC,fax,email,website,address,phoneNo,DOB,note,Id,NIC], function(err, result){
                    if (err) {
                        throw err;
                    }
                    else{
                        //res.send("Updated successful");
                        res.json({data: result});
                    }
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

    customers.get('/logout', function (req, res) {
        req.session.destroy();
        res.send('Logout');
        res.end('/');
       });



customers.get('/customerView',function(req,res){
        if(req.session.adminId){
            res.send('please log as an admin');
        }
        else{
            sql.query("SELECT * FROM customer inner join customer_address on customer.Id = customer_address.Id inner join customer_phone on customer.Id = customer_phone.Id ",function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result.length>0){
                        console.log(result);
                        var length = result.length;
                        var state = true;
                        res.send({result,state});
                    }
                    else{
                        res.json('No any customers');
                    }
                }
            });
        }
    });
    
    customers.post('/search',function(req,res){
        console.log("foeiajfej");
        if(!req.session.userId || !req.session.adminId){
            var searchId = req.body.searchId;
            console.log(searchId);
            sql.query('select * from customer  WHERE Id = ?',[searchId],function(err,result){
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
                    }
                }
            })
        }
        else{
            res.send('please log');
        }
    })
    
    module.exports = customers;