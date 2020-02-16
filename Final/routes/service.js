var express = require('express');
var service = express.Router();
var ses = require('express-session');
var path = require('path');
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
service.get('/viewService',function(req,res){
    if(req.session.adminId){
        res.send('please log as an admin');
    }
    else{ 
        sql.query("SELECT * FROM service",function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    var state = true;
                    res.json({result,state});
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
    console.log("name",name);
    console.log('price',price)
    console.log("cat",category);
    if(req.session.adminId){
        if(category && name && price){
            sql.query('SELECT serviceId FROM service WHERE name = ? AND category = ?',[name,category],function(err,result){
                if(err){
                    console.log('errrrrrrr');
                    throw err;
                }
                else{
                    console.log('qqqq4')
                    if(result.length>0){
                        res.send('service already exist');
                    }
                    else{
                        sql.query('INSERT INTO service (category,name,price) VALUES (?,?,?)',[category,name,price],function(err1,result1){
                            if(err1){
                                throw err1;
                            }
                            else{
                                if(result1){
                                    var state = true;
                                    sql.query("SELECT * FROM service",function(err2,result2){
                                        if(err){
                                            throw err;
                                        }
                                        else{
                                            console.log('service added');
                                            if(result2.length>0){
                                                console.log('service added');
                                                res.send({result2, state});
                                            }
                                            else{
                                                //console.log('')
                                                console.log('qqqq1')
                                                res.json('No any services');
                                            }
                                        }
                                    });
                                }
                                else{
                                    console.log('qqqq')
                                    var state = false;
                                    res.send(state)
                                }
                            }
                        })
                    }
                }
            })
        }
    }
    else{
        console.log('qqqq2')
        var message = 'please log as an admin';
        var state = false;
        res.send({message, state});
    }
});

//UPDATE SERVICE 
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
                                            var state = true;
                                            res.send(result2);
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
        else{
            res.send('fill all details');
        }
    }
    else{
        res.send('please log as an admin');
    }
    
});

//REMOVE SERVICE
service.post('/serviceRemove',function(req,res){
    console.log('eeeeeee');
    console.log(req.body.serviceId)
    var serviceId = req.body.serviceId;
    var name = req.body.name;
    if(req.session.adminId){
        if(serviceId && name){
            sql.query('SELECT * FROM service WHERE serviceId = ? AND name = ?',[serviceId,name],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result.length>0){
                        sql.query('DELETE FROM service WHERE serviceId = ? AND name = ?',[serviceId,name],function(err1,result2){
                            if(err1){
                                throw err1;
                            }
                            else{
                                console.log('deleted');
                                sql.query("SELECT * FROM service",function(err2,result2){
                                    if(err){
                                        throw err;
                                    }
                                    else{
                                        console.log('service deleted');
                                        if(result2){
                                            var state = true;
                                            var message = "deleted"
                                            res.json(result2,message,state);
                                        }
                                        else{
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
        else{
            res.send('fill all details')
        }
    }
    else{
        res.send('please log as an admin')
    }
})

//SEARCH SINGLE SERVICE
service.post('/search',function(req,res){
    var searchId = req.body.searchId;
    if(!req.session.userId || !req.session.adminId){
        sql.query('select * from service where serviceId = ?',[searchId],function(err,result){
            if(err) {
                console.log('servicesearch err');
                console.log(err);
            }
            else{
                if(result.length>0){
                    var state = true;
                    console.log('done');
                    res.send(result);
                }
                else{
                    console.log('no data');
                    res.send('no data');
                }
            }
        })
    }
    else{
        var state = false;
        var message = "not work"
        res.send({state,message});
    }
})

//TOP SERVICE
service.get('/topService',function(req,res){
   
    console.log('ddddddddd');
    if(req.session.userId || req.session.adminId){
        sql.query('SELECT count(invoiceId) as coun, serviceId from service_invoice_services group by serviceId ORDER by coun DESC LIMIT 1',function(err,result){
        if(err){
            console.log('top err');
            console.log(err);
        }
        else{
            if(result.length>0){
                var id = result[0].serviceId;
                sql.query('select * from service where serviceId = ?',[id],function(err2,result2){
                    if(err2){
                        console.log('err2')
                        console.log(err2)
                    }
                    else{
                        console.log(result2);
                        res.send({result,result2});
                    }
                })
            }
            console.log('no data');
            //res.send('no data');
        }
    })
    }
    else{
        console.log('please log')
        res.send('please log');
    }
})



//Services what melius provide
//service

///////////////////////////////////

//ADD SERVICE to INVOICE
service.post('/newServiceInvoice',function(req,res,next){
    console.log('comes')
    var today = new Date();
    var resss;
    var serviceId = req.body.serviceId;
    var customerId = req.body.customerId;
    var vehicleId = req.body.vehicleId;
    //var serviceType = req.body.serviceType;
    var date = today;
    var sub_total = 0;
    var total = 0;
    var discount = req.body.discount;
    var remarks = req.body.remarks;
    var iid;
    var newTotal = 0.0;
    console.log(customerId)
    console.log(vehicleId)
    console.log(serviceId)
    console.log(discount)
    console.log(date)
    console.log(remarks)
    if(!req.session.userId || !req.session.adminId){
        console.log('not logged')
        res.send('please log');
    }
    else{
        console.log('else')
        if(customerId && serviceId && discount && vehicleId && date && remarks){
            console.log('llllllllllllllllll');
            sql.query('select name from service where serviceId = ?',[serviceId],function(err3,result3){
                if(err3){
                    throw err3;
                }
                else{
                    if(result3.length>0){
                        sql.query('select price from service where serviceId = ?',[serviceId],function(err4,result4){
                            if(err4){
                                throw err4;
                            }
                            else{
                                if(result4.length>0){
                                    total = result4[0].price;
                                    console.log('aaaaaaaaaaaaaa');
                                    console.log(total);
                                    //var iid;

                                    sql.query('SELECT vehicleNo FROM vehicle  WHERE custId = ? AND Id = ?',[customerId,vehicleId],function(err1,result1){
                                        if(err1){
                                            throw err1;
                                        }
                                        else{
                                            if(result1.length>0){
                                                console.log(result1);
                                                    var temp = parseInt(total);
                                                    sub_total =total - temp*(discount/100);
                                                    
                                                    sql.query('INSERT INTO service_invoice (customerId, vehicleId, date, total, discount, remarks, sub_total) VALUES (?,?,?,?,?,?,?)',[customerId, vehicleId,date,total,discount,remarks,sub_total],function(err,result){
                                                        if(err){
                                                            throw err;
                                                        }
                                                        else{
                                                            console.log('plofv,ofgmkmokgrmogrb');
                                                            console.log(result.insertId);
                                                            iid = result.insertId;
                                                            console.log('insert invoice');

                                                            sql.query('insert into service_invoice_services (invoiceId,serviceId) values (?,?)',[iid,serviceId],function(err5,result5){
                                                                if(err5){
                                                                    console.log('error5')
                                                                    throw err5;
                                                                }
                                                                else{
                                                                    console.log('success')
                                                                    sql.query("select * from service_invoice inner join service_invoice_services on service_invoice.invoiceId = service_invoice_services.invoiceId where service_invoice.invoiceId = ?",[iid],function(err6,result6){
                                                                        if(err6){
                                                                            console.log("error6")
                                                                            console.log(err6);
                                                                        }
                                                                        else{
                                                                            // DOWN PART
                                                                            console.log('11111111111111111111111');
                                                                            console.log(result6);
                                                                            //res.send(result6);
                                                                            console.log(total);
                                                                            var invoice2 = doc1 = new PDFDocument;
                                                                            console.log('llwdlwionfsndlkvnavkjvnsdkjvn')
                                                                            var invoice = doc1.pipe(fs.createWriteStream(iid+'.pdf'));
                                                                                console.log("tttttttttttttttt");
                                                                                    // Set a title and pass the X and Y coordinates
                                                                                doc1.fontSize(15).text('Summary of Services in the day !\n\n\n', 50, 50);
                                                                                    // Set the paragraph width and align direction
                                                                                for(var m = 0; m<result6.length; m++){
                                                                                    doc1.text("invoice Id  : "+result6[m].invoiceId+"\n customer id : "+result6[m].customerId+"\n vehicle id : "+result6[m].vehicleId+"\n date : "+result6[m].date+"\n price : "+result6[m].total+"\n disconut : "+result6[m].discount +"\n final total : "+result6[m].sub_total,{
                                                                                        width: 410,
                                                                                        align: 'left'
                                                                                    });
                                                                                    doc1.text("\n\n",{
                                                                                        width: 410,
                                                                                        align: 'left'
                                                                                    });
                                                                                }    
        
                                                                                // res.json('done');
                                                                                doc1.end();
                                                                            if(result6.length>0){
                                                                                console.log('invoice send');
                                                                                console.log(result6);
                                                                                var state = true;
                                                                                var res1 = result6[0];
                                                                                res.send({res1});
                                                                            }
                                                                            else{
                                                                                res.send('try again')
                                                                            }
                                                                            
                                                                        }
                                                                        
                                                                    });
                                                                    //res.send("success");
                                                                    
                                                                }
                                                                
                                                            })

                                                            
                                                        }
                                                    });
                                                    console.log('eeeeeeeeeeeeeeeeeeeeeeee')
                                                    console.log(iid)
                                                    
                                            }
                                            else{
                                                res.send('Wrong details!!!!, please check agin')
                                            }
                                        }
                                    });
                                }
                                else{
                                    req.send('something went wrong try again')
                                }
                            }
                        })
                    }
                    else{
                        res.send('service not found');
                    }
                }
            })
        }
        else{
            res.send('fill all details000000000000000')
        }
        
    }
    console.log('end');
});

//delete DATA OF INVOICE
service.post('/deleteBill',function(req,res){
    var invoiceId = req.body.invoiceId;
    
    if( req.session.adminId){
        sql.query('select serviceId from service_invoice_services where invoiceId = ?',[invoiceId],function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    sql.query('delete from service_invoice_services where invoiceId = ?',[invoiceId],function(err2,result2){
                        if(err2){
                            throw err2;
                        }
                        else{
                            sql.query('delete from service_invoice where invoiceId = ?',[invoiceId],function(err1,result1){
                                if(err1){
                                    throw err1
                                }
                                else{
                                    res.send('delete success');
                                }
                            })
                        }
                    })
                    
                }
                else{
                    res.send('wrong invoice id')
                }
            }
        })

        
    }
    else{
        res.send('please log')
    }
})

//GET DATA FROM INVOICE
service.post('/currentBill',function(req,res){
    var serviceId = req.body.invoiceId;

    if(req.session.userId || req.session.adminId){
        sql.query('SELECT date FROM service_invoice WHERE invoiceId = ?',[serviceId],function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    sql.query('SELECT * FROM service_invoice WHERE invoiceId = ?',[serviceId],function(err1,result1){
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
    if(req.session.userId || req.session.adminId){
        if(date){
            sql.query('SELECT * FROM service_invoice WHERE date = ?',[date],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    //TOTAL OF THE CURRENT INVOICE
                    sql.query('SELECT sub_total FROM service_invoice WHERE date ?',[date],function(err1,result1){
                        if(err1){
                            throw err1;
                        }
                        else{
                            console.log('11111111111111111111111');
                            console.log(result1);
                            for(var i = 0; i<result1.length; i++){
                                console.log(result1[i].sub_total);
                                var x = parseFloat(result1[i].sub_total);
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
                                doc1.text("invoice Id : "+result[m].invoiceId+"\n customer id : "+result[m].customerId+"\n vehicle Id : "+result[m].vehicleId+"\n date : "+result[m].date+"\n total : "+result[m].total+"\n subtotal :"+result[m].sub_total,{
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
                            res.send({result,result1});
                        }
                    })

                    console.log(result);
                    
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
    if(req.session.userId || req.session.adminId){
        if(date1 && date2){
            sql.query('SELECT * FROM service_invoice WHERE date BETWEEN ? AND ?',[date1,date2],function(err,result){
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
