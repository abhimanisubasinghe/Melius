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


//CUSTOMER REGISTRATION
customers.post('/customerRegistration',function(req,res){
    //var id = req.body.customerId;
    var name = req.body.customerName;
    var nic = req.body.customerNIC;
    var phone = req.body.phone;
    var email = req.body.email;
    var address = req.body.address;
    var vehicles = req.body.noOfVehicle;
    
    console.log(req.session.userId);
    console.log(phone);
    console.log(req.session.userId);

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
                                    //res.send('register successful');
                                    res.json({data: result});
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
    
    module.exports = customers;