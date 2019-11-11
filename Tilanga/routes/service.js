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
});

//GET DATA FOR INVOICE
service.post('/currentBill',function(req,res){
    var serviceId = req.body.serviceId;

    if(req.session.userId){
        sql.query('SELECT date FROM service WHERE serviceId = ?',[serviceId],function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    sql.query('SELECT * FROM service WHERE serviceId = ?',[serviceId],function(err1,result1){
                        if(err1){
                            throw err1;
                        }
                        else{
                            if(result1.length>0){
                                res.json({result: result1});
                            }
                        }
                    });
                }
            }
        });
    }
    else{
        res.send('please log');
    }
});

//GET SUMMERY OF DATE
service.post('/dateBill',function(req,res){
    var date = req.body.date;
    console.log(date);
    if(req.session.userId){
        if(date){
            sql.query('SELECT * FROM service WHERE date = ?',[date],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    console.log(result);
                    res.json({result : result});
                }
            });
        }
        else{
            res.send('insert date');
        }
    }
    else{
        res.send('please log');
    }
});

//BILL FOR DATE RANGE
service.post('/rangeBill', function(req,res){
    var date1 = req.body.date1;
    var date2 = req.body.date2;
    console.log(date1);
    //yyyy-dd-mm
    if(req.session.userId){
        if(date1 && date2){
            sql.query('SELECT * FROM service WHERE date BETWEEN ? AND ?',[date1,date2],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    res.json({result : result});
                }
            });
        }
        else{
            res.send('insert dates');
        }
    }
    else{
        res.send('please log');
    }
    
});




module.exports = service;

