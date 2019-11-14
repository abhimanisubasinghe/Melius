var express = require('express');
var router = express.Router();
var connection = require('../lib/db');


// Basic CRUD function of this API is implemented using callback functions.


//DISPLAY ITEM  LIST
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM item', function(err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('items', {
                page_title: "Item",
                data: ''
            });
        } else {
            res.render('items', {
                page_title: "Item",
                data: rows
            });
        }
    });

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

//UPDATE ITEMS FORM
router.get('/edit/(:id)', function(req, res, next) {

    connection.query('SELECT * FROM item WHERE itemCode=' + req.params.id, function(err, rows, fields) {

        if (err) throw err

        if (rows.length <= 0) {
            req.flash('error', 'Customer not found with id =', +req.params.id);
            res.redirect('/items');
        } else {
            res.render('items/edit', {
                title: "Edit item",
                id: rows[0].itemCode,
                name: rows[0].name,
                min: rows[0].min,
                max: rows[0].max,
                descript: rows[0].descript,
                purchasePrice: rows[0].purchasePrice,
                sellingPrice: rows[0].sellingPrice,
                storageId: rows[0].storageId,
                supplierId: rows[0].supplierId,
                barcode: rows[0].barcode

            })
        }
    })

});

//UPDATE ITEM

router.post('/update/(:id)', function(req, res, next) {

    var user = {
        name: req.body.name,
        descript: req.body.descript,
        min: req.body.min,
        max: req.body.max,
        purchasePrice: req.body.pPrice,
        sellingPrice: req.body.sPrice,
        storageId: req.body.storage,
        supplierId: req.body.supplier,
        barcode: req.body.barcode
    };
    connection.query('UPDATE item SET ? WHERE itemCode=' + req.params.id, user, function(err, result) {
        if (err) {
            req.flash('error', err);

            res.render('items/edit', {
                title: 'Edit Item',
                id: req.params.id,
                name: req.body.name

            })
        } else {
            req.flash('success', 'Data updated successfully!');
            res.redirect('/items');
        }
    });
});


//DELETE ITEM

router.get('/delete/(:id)', function(req, res, next) {

    var user = { itemCode: req.params.id }

    connection.query('DELETE FROM item WHERE itemCode=' + req.params.id, user, function(err, result) {
        if (err) {
            req.flash('error', err)
                // redirect to users list page
            res.redirect('/items')
        } else {
            req.flash('success', 'Customer deleted successfully! id = ' + req.params.id)
                // redirect to users list page
            res.redirect('/items')
        }

    });
});




module.exports = router;