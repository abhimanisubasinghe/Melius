'user strict';
var express = require('express');
var sql = require('../database/db');
var customers = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var user = require('../routes/Users')



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

//console.log(userId);

customers.use(body.json());
customers.use(body.urlencoded({extended: false}));
customers.use(cors());

var path = require('path');

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

//CUSTOMER REGISTRATION
customers.post('/customerRegistration',function(req,res){
    //var id = req.body.customerId;

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
                                    if(result2.length>0){
                                        sql.query('select Id from customer where NIC = ?',[NIC],function(err3,result3){
                                            if(err3){
                                                throw err3;
                                            }
                                            else{
                                                if(result3.length>0){
                                                    sql.query('insert into customer_address (Id,address) values (?,?)',[Id,address],function(err4,reslut4){
                                                        if(err4){
                                                            throw err4;
                                                        }
                                                        else{
                                                            sql.query('insert into customer customer_phone (Id,phoneNo) values (?,?)',[Id,phoneNo],function(err5,result5){
                                                                if(err5){
                                                                    throw err5;
                                                                }else{
                                                                    if(result5.length>0){
                                                                        res.send("registered successfull");
                                                                    }
                                                                    else{
                                                                        res.send('phone number not inserted')
                                                                    }
                                                                }
                                                            })
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
        var id = req.body.customerId;
        var name = req.body.customerName;
        var nic = req.body.customerNIC;
        var phone = req.body.phone;
        var email = req.body.email;
        var address = req.body.address;
        var vehicles = req.body.noOfVehicle;
        if(req.session.userId){
            if(id && name && nic && phone && email && address && vehicles ){
                sql.query('UPDATE customer SET customerName = ?, phone = ?, email = ?, address =? , noOfVehicle = ? WHERE customerId = ? AND customerNIC = ? ',[name,phone,email,address,vehicles,id,nic], function(err, result){
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
        if(!req.session.adminId){
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
    
    
    module.exports = customers;