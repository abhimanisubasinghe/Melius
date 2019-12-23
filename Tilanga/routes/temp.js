
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
    var total =  0;
    var discount = req.body.discount;
    var remarks = req.body.remarks;
    var iid;
    var newTotal = 0.0;
    if(!(req.session.userId || req.session.adminId)){
        console.log('not logged')
        res.send('please log');
    }
    else{
        console.log('else')
        if(customerId && serviceId && discount && vehicleId && date && remarks){
            console.log('llllllllllllllllll')
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
                                                                    //res.send("success");
                                                                }
                                                            })

                                                            ///////////////
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
        res.send('fill all details')
    }
});

//////////////////
sql.query("select * from service_invoice where invoiceId = ?",[iid],function(err6,result6){
    if(err6){
        console.log("error6")
        console.log(err6);
    }
    else{
        // DOWN PART
        if(result6.length>0){
            console.log('qqqqqqqqqqqq kjv sk vs v')
            //res.json({result: result6});
        }
        
    }
    
});