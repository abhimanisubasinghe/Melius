var express = require('express');
var service = express.Router();
var ses = require('express-session');
var pat = require('path');
var body = require('body-parser');
var cors = require('cors');
var sql = require('../database/db');

const TWO_HOUR = 1000*60*60*2;
var session;
var userId;

service.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

service.use(body.json());
service.use(body.urlencoded({extend: false}));
service.use(cors());


//go to service
service.get('/',function(req,res){
    if(!req.session.userId){
        res.send('please log');
    }
    else{
        res.json('services!!!');
    }
});

//ADD SERVICE
service.post('/newService',function(req,res){
    var today = new Date();

    var serviceId = req.body.serviceId;
    var customerId = req.body.customerId;
    var vehicleNo = req.body.vehicleNo;
    var serviceType = req.body.serviceType;
    var date = today;
    var payment = req.body.payment;
    var cashPayment = req.body.cashPayment;
    var cardPayment = req.body.cardPayment;
    if(!req.session.userId){
        res.send('please log');
    }
    else{
        if(customerId && vehicleNo && serviceType && payment && (cashPayment || cardPayment)){
            sql.query('SELECT vehicle.vehicleType FROM vehicle INNER JOIN service ON vehicle.vehicleNo = service.vehicleNo WHERE service.customerId = ? AND service.vehicleNo = ?',[customerId,vehicleNo],function(err1,result1){
                if(err1){
                    throw err;
                }
                else{
                    if(result1.length>0){
                        console.log(result1);
                        if(cashPayment){
                            cardPayment = 0.0;
                            sql.query('INSERT INTO service (customerId, vehicleNo, serviceType, date, payment, cashPayment,cardPayment) VALUES (?,?,?,?,?,?,?)',[customerId, vehicleNo,serviceType,date,payment,cashPayment,cardPayment],function(err,result){
                                if(err){
                                    throw err;
                                }
                                else{
                                    res.json({result : result});
                                }
                            });
                        }
                        else if(cardPayment){
                            cashPayment = 0.0;
                            sql.query('INSERT INTO service (serviceId, customerId, vehicleNo, serviceType, date, payment, cashPayment,cardPayment) VALUES (?,?,?,?,?,?,?,?)',[customerId, vehicleNo,serviceType,date,payment,cashPayment,cardPayment],function(err,result){
                                if(err){
                                    throw err;
                                }
                                else{
                                    res.json({result : result});
                                }
                            });
                        }
                    }
                    else{
                        res.send('Wrong details!!!!, please check agin')
                    }
                }
            });
        }
    }
})




module.exports = service;

