var express = require('express');
var routerThree = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');


//Display purchase order
routerThree.get('/', function(req, res, next) {

    res.render('items/purchaseOrder', {
        title: 'Add new purchase order'
    });
});

//Add new purchase order

routerThree.post('/add', function(req, res, next) {

    var user = {
        supplierId: req.body.supplierId,
        estimatedWait: req.body.days,
        date: req.body.date,
        total: req.body.total,

    }

    connection.query('INSERT INTO purchaseorders SET ?', user, function(err) {
        if (err) {
            req.flash('error', 'Error inserting data');
        } else {
            req.flash('success', 'Data inserted succesfully');
            res.redirect('/items');
        }
    })

})
module.exports = routerThree;