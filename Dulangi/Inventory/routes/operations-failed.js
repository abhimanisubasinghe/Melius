var express = require('express');
var routerOne = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');

//Javascript Promises are used for implementation in this module

var promise = new Promise(function(resolve, reject) {
    routerOne.get('/transfer', function(req, res, next) {
        connection.query('SELECT * FROM item', function(err, rows) {
            if (err) {
                reject(err);
            } else {
                var result = {
                    response: res,
                    data: rows
                }
                resolve(result);
            }
        });

    });
});

promise.then(function(result) {
    result.response.render('items', {
        page_title: "Item",
        data: result.data
    });
}, (function(err) {
    console.log(err);
}))

// DISPLAY STOCK TRANSFER REQUEST FORM
var promiseTwo = new Promise(function(resolve, reject) {
    routerOne.get('/transfer/add', function(req, res, next) {
        resolve(res);
    })
})

promiseTwo.then(function(res) {
    res.render('items/transferadd', {
        page_title: 'Stock transfer'
    })
})

//ADD TRANSFER DETAILS TO THE DATABASE
var promiseThree = new Promise(function(resolve, reject) {
    routerOne.post('/transfer/add', function(req, res) {
        var data = {
            warehouseId: req.body.Location,
            date: req.body.date,
            //item: req.body.item,
            //quantity: req.body.quantity
        }
        connection.query('INSERT INTO stocktransfer SET ?', data, function(err) {
            if (err) {
                var data = {
                    request: req,
                    error: err
                }
                reject(data);
            } else {
                var data = {
                    message: 'Data inserted successfully',
                    response: res
                }
                resolve(data);
            }
        })
    })
})


promiseThree.then(function(data) {
    console.log(data.message);
    data.response.redirect('/op/transfer');

}, function(data) {
    data.request.flash('error', data.error);
})


module.exports = routerOne;