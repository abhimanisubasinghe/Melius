'user strict';
var express = require('express');
var sql = require('../database/db');
var appointments = express.Router();
var cors = require('cors');
var body = require('body-parser');
var ses = require('express-session');

const TWO_HOUR = 1000*60*60*2;

appointments.use(ses({
    name: "sid", 
    secret: "adcnskl",
    resave: false,
    saveUnitialized:false,
    cookie: {
        maxAge: TWO_HOUR,
        sameSite: true
    }
}));

appointments.use(body.json());
appointments.use(body.urlencoded({extended: false}));
appointments.use(cors());

appointments.get('/',function(req,res){
    if(!req.session.userId || !req.session.adminId){
        sql.query('select * from appointments;',function(err,result){
            if(err){
                console.log('err view appointments')
                console.log(err);
                throw err;
            }
            else{
                if(result.length>0){
                    res.json(result);
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
}
)

appointments.post('/create', function(req,res){
    console.log('jnvvjknvsjnvkjsnvkjsnvjk');
    
        var date = req.body.date;
        var customerId = req.body.customerId;
        var vehicleId = req.body.vehicleId;
        var descript = req.body.descript;
        
        console.log("date",date);
        console.log("customerId",customerId);
        console.log("vehicleId",vehicleId);
        console.log("descript",descript);
        if(!req.session.userId || !req.session.adminId){
            if(date && customerId && vehicleId && descript){
                console.log("stage1")
                sql.query('INSERT INTO appointments (date,customerId,vehicleId,descript) VALUES (?,?,?,?)',[date,customerId,vehicleId,descript], function(err2,result2){
                    
                    if(err2){
                        
                        console.log("error2",err);
                    }
                    else{
                        //res.send('register successful');
                        console.log(result2);
                        if(result2){
                            console.log("successful");
                            var state = true;
                            res.json({state,result2});
                        }
                        else{
                            res.send('not created');
                        }
                    }
                });     
            }
            
            else{
                var state = false;
                res.send({error: 'Fill all details!!',state});
            }  
        }
        else{
            var state = false;
            res.send('please log as an admin')
        }
    
        
    });

appointments.post('/update',function(req,res){
    console.log("blabal");
    var jobId = req.body.jobId; 
    var date = req.body.date;
    var customerId = req.body.customerId;
    var vehicleId = req.body.vehicleId;
    var descript = req.body.descript;
    
    console.log("date",date);
    console.log("customerId",customerId);
    console.log("vehicleId",vehicleId);
    console.log("descript",descript);
        //var password = req.body.password;
        if(!req.session.userId || !req.session.adminId){
            if(jobId  && date && customerId && vehicleId && descript){
                sql.query('UPDATE appointments SET date = ?, customerId = ?, vehicleId = ?, descript = ? WHERE jobId  = ? ',[date,customerId,vehicleId,descript,jobId], function(err, result){
                        if (err) {
                            console.log("Error in updating");
                            throw err;
                        }
                        else{
                            console.log("update success");
                            console.log("res",result);
                            resultFinal = result;
                            var state = true;
                            res.json({state,result});
                        }
    
                    })
                
            }
            else{
                res.send("Fill all details");
            }
        }
        else{
            res.send("please login");
        }
});

appointments.post('/delete',function(req,res){
    console.log("bajioae");
    var jobId = req.body.jobId;
    if(!req.session.adminId){
        sql.query('select * from appointments where jobId = ?',[jobId],function(err,result){
            console.log("asewf")
            if(err){
                console.log('deleteusererr1');
                console.log(err);
                throw err;
            }
            else{
                if(result[0].jobId){
                    sql.query('delete from appointments where jobId = ?',[jobId],function(err2,result2){
                        if(err2){
                            console.log('userdeleteerr2');
                            console.log(err2);
                            res.send('try again');
                        }
                        else{
                            if(result2){
                                var state = true;
                                var message = 'deleted';
                                res.send({state,message});
                            }
                            else{
                                res.send('try again');
                            }
                        }
                    })
                }
                else{
                    res.send('cannot find user')
                }
            }
        })
    }
})

appointments.post('/search',function(req,res){
    console.log("foeiajfej");
    if(!req.session.userId || !req.session.adminId){
        var searchId = req.body.searchId;
        console.log(searchId);
        sql.query('select * from appointments WHERE jobId = ?',[searchId],function(err,result){
            console.log(result);
            if(err){
                console.log('err view appointment')
                console.log(err);
                throw err;
            }
            else{
                if(result.length>0){
                    res.json(result);
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

module.exports = appointments;