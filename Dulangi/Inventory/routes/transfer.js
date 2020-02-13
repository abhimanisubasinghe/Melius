var express = require('express');
var routerTwo = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');

//Display transfer request form
routerTwo.get('/add', function(req, res, next) {

    //Get the list of locations from the database and render it to transfer note

    connection.query("SELECT warehouseId,name FROM warehouse", function(err, result) {
        if (err) {
            console.log(err);
            res.flash('error', err);
        } else {
            console.log(result);
            res.render('items/transferadd', {
                dropdownVals: result,
            });
        }
    })
});

// Insert new transfer request
routerTwo.post('/add', function(req, res, next) {

    if (true) {

        var k =[""];
        var data = {
            warehouseId: req.body.warehouseId,
            date: req.body.date,
            
        }
        console.log(typeof k);
        
        connection.query('INSERT INTO stocktransfer SET ?', data, function(err, result) {

            if (err) {
                console.log(err);
                req.flash('error', err);
                res.redirect('/items');

            } else {
                
                var info = {
                    transferId: result.insertId,
                    itemId: req.body.itemId,
                    quantity: req.body.quantity

                }

                connection.query('INSERT INTO stocktransfer_item SET ?', info, function(err, result) {

                    if (err) {
                        console.log(err);
                        req.flash('error', err);
                        res.redirect('/items');
                    } else {
                        res.redirect('/items');
                    }
                });


            }
        });

    } else {

        var error_msg = ''
        errors.foreach(function(error) {

            error_msg += error_msg + '<br>'
        });

        req.flash('error', error_msg);

        res.render('items/add', {
            title: 'Add new Customer',
            name: req.body.name,
            description: req.body.descript
        })
    }

});


//Display transfer requests

routerTwo.get('/', function(req, res, next) {

    var P2 = new Promise(function(resolve, reject) {
        connection.query('SELECT stocktransfer.transferId,warehouse.name,stocktransfer.date FROM stocktransfer INNER JOIN warehouse ON stocktransfer.warehouseId = warehouse.warehouseId', function(err, result) {

            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        })
    })

    P2.then(function(rows) {
        res.render('items/transfer', {
            data: rows
        })
    }, function(err) {
        req.flash('error', err);
    })
})

//View transfer request

routerTwo.get('/view/(:id)', function(req, res, next) {


    var P3 = new Promise(function(resolve, reject) {
        connection.query('SELECT item.name,stocktransfer_item.quantity FROM stocktransfer_item INNER JOIN item ON stocktransfer_item.itemId = item.itemCode WHERE stocktransfer_item.transferId =' + req.params.id, function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result)
            }
        })
    })

    P3.then(function(result) {
        res.render('items/transferNote', {
            data: result
        });
    }, function(err) {
        req.flash(err);
    })
})


module.exports = routerTwo;