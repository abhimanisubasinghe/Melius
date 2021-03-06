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
                                                                        console.log(result1);
                                                                        var state = true;
                                                                        var message = "registered successfull";
                                                                        res.send({message,state});

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
        console.log(Id);
        console.log(fax);
        console.log(DOB)
        console.log(phoneNo)

        if(!req.session.userId){
            console.log('come')
            if(Id && name && NIC && fax && type && email  && website && address && phoneNo && DOB && note ){
                sql.query('UPDATE customer SET  name = ? ,NIC =?, fax = ?,type = ?, email = ?,website = ? , DOB =?, note= ? WHERE Id = ?  ',[name,NIC,fax,type,email,website,DOB,note,Id], function(err, result){
                    if (err) {
                        throw err;
                    }
                    else{
                        if(result){
                            sql.query('UPDATE customer_address SET address = ? WHERE Id = ?',[address,Id],function(err1,result1){
                                if(err1){
                                    throw err1;
                                }else{
                                    if(result1){
                                        sql.query('UPDATE customer_phone SET phoneNo = ? WHERE Id = ?',[phoneNo,Id],function(err2,result2){
                                            if(err2){
                                                throw err2;
                                            }
                                            else
                                            {
                                                if(result2.length>0){
                                                    var state = true;
                                                    var massege = "done";
                                                    res.send({massege,state})
                                                }
                                                else{
                                                    //res.send('not success');
                                                }
                                               

                                            }
                                        })
                                    }
                                    else{
                                        res.send('no address');
                                    }

                                }
                            })

                        }else{
                            res.send("no data");

                        }
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


//TOP CUSTOMER
customers.get('/topCustomer',function(req,res){
   
    console.log('ddddddddd');
    if(!req.session.userId || !req.session.adminId){
        sql.query('SELECT count(customerId) as coun, customerId from service_invoice group by customerId ORDER by coun DESC LIMIT 1',function(err,result){
        if(err){
            console.log('top err');
            console.log(err);
        }
        else{
            if(result.length>0){
                var id = result[0].customerId;
                sql.query('select * from customer where Id = ?',[id],function(err2,result2){
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





customers.get('/customerView',function(req,res){
        if(req.session.adminId){
            res.send('please log as an admin');
        }
        else{
            sql.query("SELECT *  FROM customer inner join customer_address on customer.Id = customer_address.Id inner join customer_phone on customer.Id = customer_phone.Id ",function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result){
                        console.log("plz")
                        sql.query('select count(Id)  as count from customer',function(err1,result1){
                            console.log("plzzzz")
                                        if(err1){
                                                throw err1;                                                                                    console.log("plzzzz")


                                        }else{
                                            if(result1){
                                                console.log(result1);
                                                var state = true;
                                                
                                                var message = "registered successfull";
                                                res.send({result});

                                            }
                                            
                                        }
                        })
                      
                    }
                    else{
                        res.send('phone number not inserted')
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
            sql.query('SELECT * FROM customer inner join customer_address on customer.Id = customer_address.Id inner join customer_phone on customer.Id = customer_phone.Id where customer.Id = ?',[searchId],function(err,result){
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
    
    customers.post('/searchByName',function(req,res){
        console.log("foeiajfej");
        if(!req.session.userId || !req.session.adminId){
            var searchId = "%"+req.body.searchId+"%";
            console.log(searchId);
            sql.query('SELECT * FROM customer inner join customer_address on customer.Id = customer_address.Id inner join customer_phone on customer.Id = customer_phone.Id where customer.name LIKE ?',[searchId],function(err,result){
                console.log(result);
                if(err){
                    console.log('err view customer')
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


    customers.post('/deletecus',function(req,res){
        console.log("come");
        if(!req.session.adminId){
            var Id=req.body.Id;
            sql.query('DELETE FROM customer_phone where Id = ?',[Id],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result){
                        sql.query('DELETE FROM customer_address WHERE Id = ? ',[Id],function(err1,result1){
                            if(err1){
                                throw err1;

                            }
                            else{
                                if(result1){
                                    sql.query('DELETE FROM customer WHERE Id = ?',[Id],function(err2,result2){
                                        if(err2){
                                            throw err2;


                                        }
                                        else{
                                            if(result2){
                                            var state = true;
                                            res.send({state});

                                            }
                                            else{
                                                
                                            }
                                            
                        

                                        }
                                    })

                                }
                                else{

                                }

                            }
                        })



                    }
                    else{

                        res.send("phone No not deleted")

                    }
                }
            })
        }
        else{
            res.send('please log');
        }





    })
    
    
    module.exports = customers;