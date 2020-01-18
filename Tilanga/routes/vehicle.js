'user strict';
var express = require('express');
var sql = require('../database/db');
var vehicles = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var user = require('../routes/Users')



const TWO_HOUR = 1000*60*60*2;
var session;
var userId;
vehicles.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

//console.log(vehicleNo);

vehicles.use(body.json());
vehicles.use(body.urlencoded({extended: false}));
vehicles.use(cors());

var path = require('path');


//CUSTOMER REGISTRATION
vehicles.post('/vehicleRegistration',function(req,res){
    //var id = req.body.customerId;

    var vehicleNo = req.body.vehicleNo;
    //var NIC = req.body.NIC;
    var category = req.body.category;
    var type = req.body.type;
    var mileage = req.body.mileage;
    var custId = req.body.custId;
   
    console.log('eeeeeeeeeeeeeeeeeeeee')
    console.log(vehicleNo);
    console.log(type);
    console.log(mileage);
    console.log(custId);


  
    if(!req.session.userId)
    {
        console.log('aaaaaaaaaaaaa');
        if(vehicleNo && type && mileage && custId){
            sql.query('SELECT vehicleNo FROM vehicle WHERE vehicleNo = ?',[vehicleNo],function(err,result){
                if(err){
                    console.log('errrrrrrr');
                    throw err;
                }
                else{
                    if(result.length>0){
                        console.log('service already exist')
                        res.send('service already exist');
                    }
                    else{
                        sql.query('INSERT INTO vehicle (vehicleNo,category,type,mileage,custId) VALUES (?,?,?,?,?)',[vehicleNo,category,type,mileage,custId],function(err1,result1){
                            if(err1){
                                throw err1;
                            }
                            else{
                                sql.query("SELECT * FROM vehicle",function(err2,result2){
                                    if(err){
                                        throw err2;
                                    }
                                    else{
                                        console.log('service added');
                                        if(result2.length>0){
                                            console.log('service added');
                                            res.json(result2);
                                        }
                                        else{
                                            //console.log('')
                                            res.json('No any services');
                                        }
                                    }
                                });
                            }
                        })
                    }
                }
            })
        }
    }
    else{
        
        res.send('please log as an admin');
    }
});

module.exports = vehicles;