var express = require('express');
var routerThree = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');


//Create new Purchase Requisition







//Display purchase order
routerThree.get('/', function(req, res, next) {

    res.render('items/purchaseOrder', {
        title: 'Add new purchase order'
    });
});

//Add new purchase order

routerThree.post('/add', function(req, res, next) {

    var user = {
        supplierId:req.body.supplierId,
        PRId:req.body.PRId,
        IssuedDate:req.body.IssuedDate,
        EstimatedDelivery:req.body.DelDate,
        Total:req.body.Total,
        DeliveryTerms:req.body.DelTerm,
        PaymentTerms:req.body.payTerm,

    }

    connection.query('INSERT INTO purchaseorders SET ?', user, function(err) {
        if (err) {
            req.flash('error', 'Error inserting data');
            console.log(err);
            res.redirect('/items');
        } else {
            req.flash('success', 'Data inserted succesfully');
            res.redirect('/items');
        }
    })

})
module.exports = routerThree;