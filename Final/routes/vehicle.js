var express = require('express');
var sql = require('../database/db');
var vehicles = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var user = require('./Users')



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


console.log("hi");

//CUSTOMER REGISTRATION
vehicles.post('/vehicleRegistration',function(req,res){
    //var id = req.body.customerId;
console.log("hhhhh");
    var vehicleNo = req.body.vehicleNo;
    //var NIC = req.body.NIC;
    var category = req.body.category;
    var type = req.body.type;
    var mileage = req.body.mileage;
    var custId = req.body.custId;

    console.log('eeeeeeeeeeeeeeeeeeeee')
    console.log(vehicleNo);
    console.log(category);

    console.log(type);
    console.log(mileage);
    console.log(custId);


  
    if(!req.session.userId)
    {
        console.log('aaaaaaaaaaaaa');
        if(vehicleNo && category && type && mileage && custId){
            sql.query('SELECT vehicleNo FROM vehicle WHERE vehicleNo = ?',[vehicleNo],function(err,result){
                if(err){
                    console.log('errrrrrrr');
                    throw err;
                }
                else{
                    if(result.length>0){
                        console.log('vehicle already exist')
                        res.send('vehicle already exist');
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
                                        console.log('vehicle added');
                                        if(result2.length>0){
                                            console.log('vehicle added');
                                            console.log("wow")
                                            var state = true;
                                            var message = "registered successfull";
                                            res.send({message,state});

                                        }
                                        else{
                                            //console.log('')
                                            res.json('No any vehicle');
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


//display vehicles
vehicles.get('/view',function(req,res){
    if(req.session.adminId){
        res.send('please log as an admin');
    }
    else{ 
        sql.query("SELECT * FROM vehicle",function(err,result){
            if(err){
                throw err;
            }
            else{
                if(result.length>0){
                    res.json(result);
                }
                else{
                    res.json('No any vehicles');
                }
            }
        });
    }
});

//Update vehicle
vehicles.post('/updatevehicle',function(req,res){
    var vehicleNo = req.body.vehicleNo;
    var category = req.body.category;
    var type = req.body.type;
    var mileage = req.body.mileage;
    var custId = req.body.custId;
    if(req.session.adminId){
        if(vehicleNo && category && type && mileage && custId){
            sql.query('SELECT vehicleNo FROM service WHERE serviceId = ?',[vehicleNo],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result.length>0){
                        sql.query('UPDATE vehicle SET vehicleNo = ?, category = ?,type = ?, mileage= ?,custId=? WHERE vehicleNo = ?',[vehicleno,category,type,mileage,custId,vehicleNo],function(err1,result1){
                            if(err1){
                                throw err1;
                            }
                            else{
                                sql.query("SELECT * FROM vehicle",function(err2,result2){
                                    if(err){
                                        throw err;
                                    }
                                    else{
                                        console.log('vehicle updated');
                                        if(result2.length>0){
                                            res.json(result2);
                                        }
                                        else{
                                            res.json('No any vehicles');
                                        }
                                    }
                                });
                            };
                        })
                    }
                    else{
                        req.send('wrong vehicle No');
                    }
                }
            })
        }
    }
    else{
        res.send('please log as an admin');
    }
    
});

//delete  vehicle
vehicles.post('/deletevehicle',function(req,res){

    var vehicleNo = req.body.vehicleNo;
 

    if(req.session.adminId){
        if(Id && vehicleNo && custId){
            sql.query('SELECT * FROM vehicle WHERE Id = ? , vehicleNo = ?, custId=?' ,[Id,vehicleNo,custId],function(err,result){
                if(err){
                    throw err;
                }
                else{
                    if(result.length>0){
                        sql.query('DELETE FROM vehicle WHERE Id = ? , vehicleNo = ?, custId=?',[Id,vehicleNo,custId],function(err1,result2){
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
                                        console.log('vehicle deleted');
                                        if(result2.length>0){
                                            res.json(result2);
                                        }
                                        else{
                                            res.json('No any vehicles');
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
            res.send('please log as an admin')
        }
    }
})


vehicles.post('/search',function(req,res){
    console.log("foeiajfej");
    if(!req.session.userId || !req.session.adminId){
        var searchId = req.body.searchId;
        console.log(searchId);
        sql.query('select * from vehicle  WHERE Id = ?',[searchId],function(err,result){
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


module.exports = vehicles;