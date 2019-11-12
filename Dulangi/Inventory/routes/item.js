var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


//DISPLAY ITEM  LIST

router.get('/', function(req, res, next) {

});




// ADD NEW ITEM FORM
router.get('/add', function(req, res, next) {

    res.render('items/add', {
        title: 'Add new item',
        name: '',
        email: ''
    })
});

// ADD NEW ITEM POST ACTION
router.post('/add', function(req, res, next) {
    /*req.assert('name', 'Name is required').notEmpty();
    req.assert('description','Description is a must').notEmpty();*/

    //var errors = req.validationErrors();

    if (true) {

        var user = {
            name: req.body.name,
            descript: req.body.descript,
            min: req.body.min,
            max: req.body.max,
            purchasePrice: req.body.pPrice,
            sellingPrice: req.body.sPrice,
            Itemgroup: req.body.group,
            brand: req.body.brand,
            type: req.body.type,
            category: req.body.category,
            storageId: req.body.storage,
            supplierId: req.body.supplier,
            barcode: req.body.barcode



        };


        connection.query('INSERT INTO item SET ?', user, function(err, result) {

            if (err) {
                req.flash('error', err);

                res.render('items/add', {
                    title: 'Add new customer',
                    name: user.name,
                    description: user.description
                })
            } else {
                req.flash('success', 'Data inserted succesfully');
                res.redirect('/items/add');
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










module.exports = router;