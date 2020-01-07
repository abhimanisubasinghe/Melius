var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');


// Basic CRUD function of this API is implemented using callback functions.

//Calculate Reorder levels
router.use(function(req, res, next) {

    var P1 = new Promise(function(resolve, reject) {
        connection.query('SELECT item.itemCode,supplier.leadTime FROM item INNER JOIN supplier ON item.supplierId = supplier.supplierId', function(err, rows) {
            if (err) {
                reject(err)
            } else {
                resolve(rows);
            }
        })
    })

    P1.then(function(rows) {
        var data = [];
        for (i = 0; i < rows.length; i++) {

            connection.query('SELECT SUM(trading_invoice_item.quantity) FROM trading_invoice_item INNER JOIN tradinginvoice ON tradinginvoce.invoiceId = trading_invoice_item.invoiceId WHERE tradinginvoice.date > DATE_SUB(now(),INTERVAL 6 MONTH) AND trading_invoice_item.itemId=' + rows[i].itemCode, function(err, result) {
                if (!err) {

                    // Calculate the reorder level
                    var MConsump = result / 6;
                    var temp = (MConsump * rows[i].leadTime / 30) + MConsump;
                    data[i] = {
                        itemCode: rows[i].itemCode,
                        reOrder_level: temp
                    }
                } else {
                    req.flash(err);
                }
            })
        }
    }).then(data => {
        for (j = 0; j < data.length; j++) {

            connection.query('UPDATE item SET reorder_level = ? WHERE itemCode = ?', data[i], function(err, result) {
                if (err) {
                    req.flash(err);
                }

            })
        }

    })
    next();
});


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

    })
});

// ADD NEW ITEM POST ACTION
router.post('/add', function(req, res, next) {

    console.log("data");
    if (true) {

        var item = {
            name: req.body.name,
            //inStock: req.body.inStock,
            //unitPrice: req.body.unitPrice,
            //costPrice: req.body.costPrice,
            //reorderLevel: req.body.reorderLevel,
            //leadTime: req.body.leadTime,
            //reorderQuantity: req.body.reorderQuantity,
            descript: req.body.descript,
            itemgroup: req.body.group,
            brand: req.body.brand,
            type: req.body.type,
            category: req.body.category,
            storageId: req.body.storageId,
            supplierId: req.body.supplierId,
            barcode: req.body.barcode,
        };

        console.log(item);
        connection.query('INSERT INTO item2 SET ?', item, function(err, result) {

            if (err) {
                req.flash('error', err);

                res.render('items/add', {
                    title: 'Add new item',

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

        })
    }
});

//UPDATE ITEMS FORM
router.get('/edit/(:id)', function(req, res, next) {

    connection.query('SELECT * FROM item WHERE itemCode=' + req.params.id, function(err, rows, fields) {

        if (err) throw err

        if (rows.length <= 0) {
            req.flash('error', 'item not found with id =', +req.params.id);
            res.redirect('/items');
        } else {
            console.log(rows[0].inStock);
            res.render('items/edit', {
                title: "Edit item",
                id: rows[0].itemCode,
                name: rows[0].name,
                inStock: rows[0].inStock,
                unitPrice: rows[0].unitPrice,
                costPrice: rows[0].costPrice,
                reorderLevel: rows[0].reorderLevel,
                leadTime: rows[0].leadTime,
                reorderQuantity: rows[0].reorderQuantity,
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
    console.log(req.body.inStock);
    var items = {
        name: req.body.name,
        inStock: req.body.inStock,
        unitPrice: req.body.unitPrice,
        costPrice: req.body.costPrice,
        reorderLevel: req.body.reorderLevel,
        leadTime: req.body.leadTime,
        reorderQuantity: req.body.reorderQuantity,
        descript: req.body.descript,
        storageId: req.body.storage,
        supplierId: req.body.supplier,
        barcode: req.body.barcode

    };
    connection.query('UPDATE item SET ? WHERE itemCode=' + req.params.id, items, function(err) {
        if (err) {

            req.flash('error', err);
            res.redirect('/items');

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
            console.log(req.params.id);
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