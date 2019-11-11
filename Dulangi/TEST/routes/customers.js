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
/* INSERT data into the database */
router.get('/add', function(req, res, next) {
    // render to views/user/add.ejs
    res.render('customers/add', {
        title: 'Add New Customers',
        name: '',
        email: ''
    })
})


router.post('/add', function(req, res, next) {

    req.assert('name', 'Name is required').notEmpty() //Validate the name 
    req.assert('email', 'A valid email is required').isEmail()


    var errors = req.validationErrors()

    if (!errors) {
        var user = {
            name: req.sanitize('name').escape().trim(),
            email: req.sanitize('email').escape().trim()
        }

        connection.query('INSERT INTO customers SET ?', user, function(err, result) {
            //If there is error
            if (err) {
                console.log('Error when inserting data');
                req.flash('error', err)

                res.render('customers/add', {
                    title: 'Add New Customer',
                    name: user.name,
                    email: user.email
                })
            } else {
                req.flash('success', 'Data added sucessfully')
                res.redirect('/customers')
            }
        })
    } else {

        console.log('Validation error');
        var error_msg = ''

        errors.forEach(error => {
            error_msg += error.msg + '<br>'
        });
        req.flash('error', error_msg)

        res.render('customers/add', {
            title: 'Add New Customer',
            name: req.body.name,
            email: req.body.email
        })
    }
})

module.exports = router;