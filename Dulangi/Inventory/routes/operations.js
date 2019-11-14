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


module.exports = routerOne;