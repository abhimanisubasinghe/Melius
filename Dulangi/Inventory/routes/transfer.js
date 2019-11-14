var express = require('express');
var routerTwo = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');

//Display transfer request form
routerTwo.get('/add', function(req, res, next) {

    res.render('items/transferadd', {
        title: 'Add new item',

    })
});

// Insert new transfer request
routerTwo.post('/add', function(req, res, next) {


    if (true) {

        var data = {
            warehouseId: req.body.Location,
            date: req.body.date
        }


        connection.query('INSERT INTO stocktransfer SET ?', data, function(err, result) {

            if (err) {
                req.flash('error', err);

                res.render('items/transferadd', {
                    title: 'Add new customer',

                })
            } else {

                var info = {
                    itemId: req.body.item,
                    quantity: req.body.quantity,
                    transferId: result.insertId
                }
                var P1 = new Promise(function(resolve, reject) {
                    connection.query('INSERT INTO stocktransfer_item SET ?', info, function(err, result) {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(info)
                        }
                    })
                })

                P1.then((result) => {
                    connection.query('UPDATE item SET inStock=inStock - ? WHERE itemCode= ?', [result.quantity, result.itemId], function(err, result) {
                        if (err) {
                            console.log(err)
                        }
                    })
                }, err => {
                    console.log(err);
                }).then(() => {
                    req.flash('success', 'Data inserted succesfully');
                    res.redirect('/transfer/add');

                })

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


module.exports = routerTwo;