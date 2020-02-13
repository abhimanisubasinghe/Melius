const express = require('express');
const cors = require('cors');
const sql = require('../database/db');

const index = express.Router();

const All_admin = 'SELECT * FROM admin';

index.use(cors());

index.get('/',function(req,res){
    res.send('go to /products the product server')
});

index.get('/products/add',function(req,res){
    const { name, password } = req.query;
    console.log(name, password);
    sql.query('insert into admin (username,password) values(?,?)',[name,password],function(err,result){
        if(err){
            return res.send(err);
        }
        else{
            return res.send('successfully added');
        }
    })
    //res.send('adding products');
});

index.get('/products',function(req,res){
    console.log('ppppppppppppppp');
    sql.query(All_admin, function(err,result){
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

module.exports = index;

