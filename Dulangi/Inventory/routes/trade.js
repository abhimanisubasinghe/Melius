var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');

//Add new Purchase order without Purchase requisition
router.post('/addItemInvoice', function(req, res, next) {


 
    var invoice = {
        total:req.body.total,
        date:new Date(),
        remarks:req.body.remarks,
        discount:req.body.delDate,
        

    }

    var item =req.body.item;
    

    connection.query('INSERT INTO tradinginvoice SET ?', invoice, function(err,result) {
        if (err) {
            //req.flash('error', 'Error inserting data');
            console.log(err);
            //res.redirect('/items');
        } else {
            for(i=0;i<item.length;i++){
                item[i].invoiceId=result.insertId;
                connection.query('INSERT INTO trading_invoice_item SET ?',item[i],function(err){
                    if(err){
                        //req.flash('error', 'Error inserting data');
                        console.log(err);
                    }else{
                        //req.flash('success', 'Data inserted succesfully');
                        //res.redirect('/items');
                    }
                })
            }
            
            
        }
    })

})

module.exports = router;