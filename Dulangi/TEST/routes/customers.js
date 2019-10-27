var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

/*GET home page. */

router.get('/', function(req, res, next) {

    connection.query('SELECT ID,name,email FROM customers', function(err, rows) {
        console.log('inside customer routes');
        if (err) {
            req.flash('error', err);
            res.render('customers', { page_title: "Customer Details", data: '' });
        } else {
            res.render('customers', { page_title: "Customer Details", data: rows });
        }
    });
});

router.get('/add', function(req, res, next) {
    // render to views/user/add.ejs
    res.render('customers/add', {
        title: 'Add New Customers',
        name: '',
        email: ''
    })
})

module.exports = router;