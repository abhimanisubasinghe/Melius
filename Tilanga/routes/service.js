var express = require('express');
var service = express.Router();
var ses = require('express-session');
var pat = require('path');
var body = require('body-parser');
var cors = require('cors');
var sql = require('../database/db');
var sql2 = require('../database/db2');
var PDFDocument, doc, doc1;
var fs = require('fs');
PDFDocument = require('pdfkit');
//var printer = require('printer');


const TWO_HOUR = 1000*60*60*2;
var session;
var userId;
var adminId;

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


//go to service and display
service.get('/',function(req,res){
    if(!req.session.adminId){
        res.send('please log as an admin');
    }
    else{
        sql.query("SELECT * FROM service",function(err,result){
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


//ADD NEW SERVICE
service.post('/addService',function(req,res){
    var category =  req.body.category;
    var name = req.body.name;
    var price =  req.body.price;
    if(req.session.adminId){
        if(category && name && price){
            sql.query('SELECT serviceId FROM service WHERE name = ? AND category = ?;',[name,category],function(err,result){
                if(err){
                    console.log('errrrrrrr');
                    throw err;
                }
                else{
                    if(result.length>0){
                        res.send('service already exist');
                    }
                    else{
                        sql.query('INERT INTO service (category,name,price) VALUES (?,?,?)',[category,name,price],function(err1,result1){
                            if(err1){
                                throw err1;
                            }
                            else{
                                sql.query("SELECT * FROM service",function(err2,result2){
                                    if(err){
                                        throw err;
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

//UPDATE SERVICE DATA
service.post('/updateService',function(req,res){
    var serviceId = req.body.serviceId;
    var category = req.body.category;
    var name = req.body.name;
    var price = req.body.price;
    if(req.session.adminId){
        if(serviceId && category && name && price){
            sql.query('SELECT name FROM service WHERE serviceId = ?',[serviceId],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result.length>0){
                        sql.query('UPDATE service SET name = ?, category = ?,price = ? WHERE serviceId = ?',[name,category,price,serviceId],function(err1,result1){
                            if(err1){
                                throw err1;
                            }
                            else{
                                sql.query("SELECT * FROM service",function(err2,result2){
                                    if(err){
                                        throw err;
                                    }
                                    else{
                                        console.log('service updated');
                                        if(result2.length>0){
                                            res.json(result2);
                                        }
                                        else{
                                            res.json('No any services');
                                        }
                                    }
                                });
                            };
                        })
                    }
                    else{
                        req.send('wrong serviceId');
                    }
                }
            })
        }
    }
    else{
        res.send('please log as an admin');
    }
    
})

//Services what melius provide
//service

///////////////////////////////////

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
            sql2.query('SELECT vehicle.vehicleType FROM vehicle INNER JOIN service ON vehicle.vehicleNo = service.vehicleNo WHERE service.customerId = ? AND service.vehicleNo = ?',[customerId,vehicleNo],function(err1,result1){
                if(err1){
                    throw err;
                }
                else{
                    if(result1.length>0){
                        console.log(result1);
                        if(cashPayment){
                            cardPayment = 0.0;
                            sql2.query('INSERT INTO service (customerId, vehicleNo, serviceType, date, payment, cashPayment,cardPayment) VALUES (?,?,?,?,?,?,?)',[customerId, vehicleNo,serviceType,date,payment,cashPayment,cardPayment],function(err,result){
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
                            sql2.query('INSERT INTO service (serviceId, customerId, vehicleNo, serviceType, date, payment, cashPayment,cardPayment) VALUES (?,?,?,?,?,?,?,?)',[customerId, vehicleNo,serviceType,date,payment,cashPayment,cardPayment],function(err,result){
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
        sql2.query('SELECT date FROM service WHERE serviceId = ?',[serviceId],function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    sql2.query('SELECT * FROM service WHERE serviceId = ?',[serviceId],function(err1,result1){
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
    var total = 0;
    var date = req.body.date;
    console.log(date);
    if(req.session.userId){
        if(date){
            sql2.query('SELECT * FROM service WHERE date = ?',[date],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    //TOTAL OF THE CURRENT INVOICE
                    sql2.query('SELECT payment FROM service WHERE date ?',[date],function(err1,result1){
                        if(err1){
                            throw err1;
                        }
                        else{
                            console.log('11111111111111111111111');
                            console.log(result1);
                            for(var i = 0; i<result1.length; i++){
                                console.log(result1[i].payment);
                                var x = parseFloat(result1[i].payment);
                                total = total + x;
                            }
                            console.log(total);
                            doc1 = new PDFDocument;
                            doc1.pipe(fs.createWriteStream(date+'_daily.pdf'));
                            console.log("tttttttttttttttt");
                                // Set a title and pass the X and Y coordinates
                            doc1.fontSize(15).text('Summary of Services in the day !\n\n\n', 50, 50);
                                // Set the paragraph width and align direction
                            for(var m = 0; m<result.length; m++){
                                doc1.text("service id : "+result[m].serviceId+"\n customer id : "+result[m].customerId+"\n vehicle number : "+result[m].vehicleNo+"\n date : "+result[m].date+"\n payment : "+result[m].payment,{
                                    width: 410,
                                    align: 'left'
                                });
                                doc1.text("\n\n",{
                                    width: 410,
                                    align: 'left'
                                });
                            }    
                            doc1.text("\n"+"total of all services of the day = "+total, {
                                width: 410,
                                align: 'left'
                            });
                               // res.json('done');
                            doc1.end();
                        }
                    })

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
            sql2.query('SELECT * FROM service WHERE date BETWEEN ? AND ?',[date1,date2],function(err,result){
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


//SET PDF
service.post('/pdf',function(req,res){
    
    doc = new PDFDocument;
    doc.pipe(fs.createWriteStream('output.pdf'));

    // Set a title and pass the X and Y coordinates
    doc.fontSize(15).text('Wally Gator !', 50, 50);
    // Set the paragraph width and align direction
    doc.text('Wally Gator is a swinging alligator in the swamp. He\'s the greatest percolator when he really starts to romp. There has never been a greater operator in the swamp. See ya later, Wally Gator.', {
        width: 410,
        align: 'left'
    });
    res.json('done');
    doc.end();
})




module.exports = service;

