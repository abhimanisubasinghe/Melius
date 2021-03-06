var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');


// Basic CRUD function of this API is implemented using callback functions.

//Calculate Reorder levels
router.use(function(req, res, next) {

    var P1 = new Promise(function(resolve, reject) {
        connection.query('SELECT item2.itemCode,supplier.leadTime FROM item INNER JOIN supplier ON item2.supplierId = supplier.supplierId', function(err, rows) {
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

            connection.query('UPDATE item2 SET reorder_level = ? WHERE itemCode = ?', data[i], function(err, result) {
                if (err) {
                    req.flash(err);
                }

            })
        }

    })
    next();
});

//GET LIST OF ITEMS
router.get('/item',function(req,res,next){
    connection.query('SELECT itemCode,name FROM item2',function(err,result){
        if(err){
            throw err;
        }else{
            res.send({
                data:result
            })
        }
    })
})

//DISPLAY ITEM  LIST
router.get('/', function(req, res, next) {
    connection.query('SELECT i.itemCode,i.name,i.inStock,i.unitPrice,i.costPrice,i.reorderLevel,i.leadTime,i.descript,i.Itemgroup,i.brand,i.type,i.category,st.unit,st.number,s.name AS supplierName,i.barcode FROM supplier s INNER JOIN item i ON i.supplierId=s.supplierId INNER JOIN storage st ON i.storageId=st.storageId', function(err, result) {
        if (err) {
            throw err;
        } else {
            if(result.length>0){
                res.send({
                    
                    data:result

                });
                
            }
            else{
                res.send('No items');
            }
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
            inStock: req.body.inStock,
            unitPrice: req.body.unitPrice,
            costPrice: req.body.costPrice,
            reorderLevel: req.body.reorderLevel,
            leadTime: req.body.leadTime,
            descript: req.body.descript,
            itemgroup: req.body.itemgroup,
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

                /*res.render('items/add', {
                    title: 'Add new item',

                })*/
            } else {
                /*req.flash('success', 'Data inserted succesfully');
                res.redirect('/items/add');*/
            }
        });

    } else {

        var error_msg = ''
        errors.foreach(function(error) {

            error_msg += error_msg + '<br>'
        });

       /* req.flash('error', error_msg);

        res.render('items/add', {
            title: 'Add new Customer',

        })*/
    }
});

//UPDATE ITEMS FORM
router.get('/edit/(:id)', function(req, res, next) {
    console.log("here");
    connection.query('SELECT i.itemCode,i.name,i.inStock,i.unitPrice,i.costPrice,i.reorderLevel,i.leadTime,i.descript,i.Itemgroup,i.brand,i.type,i.category,i.storageId,i.barcode,st.unit,st.number,s.name AS supplierName,i.barcode FROM supplier s INNER JOIN item i ON i.supplierId=s.supplierId INNER JOIN storage st ON i.storageId=st.storageId WHERE itemCode=' + req.params.id, function(err, rows, fields) {

        if (err) throw err

        if (rows.length <= 0) {
            req.flash('error', 'item not found with id =', +req.params.id);
            res.redirect('/items');
        } else {
            console.log(rows[0].barcode);
            res.send({
                data:rows
            })
            /*res.render('items/edit', {
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

            })*/
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
        descript: req.body.descript,
        storageId: req.body.storageId,
        supplierId: req.body.supplierId,
        barcode: req.body.barcode

    };
    connection.query('UPDATE item2 SET ? WHERE itemCode=' + req.params.id, items, function(err) {
        if (err) {
            console.log(err);
            req.flash('error', err);
           /* res.redirect('/items');*/

        } else {
            console.log("here **");
            req.flash('success', 'Data updated successfully!');
           /* res.redirect('/items');*/
        }
    });
});


//DELETE ITEM

router.post('/delete/(:id)', function(req, res, next) {

    var user = { itemCode: req.params.id }
    console.log("Here *****")
    connection.query('DELETE FROM item WHERE itemCode=' + req.params.id, user, function(err, result) {
        if (err) {
            console.log(err);
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



// Get unit price for the invoice
router.get('/unitPrice/(:id)',function(req,res,next){
    console.log(req.params.id);
    connection.query('SELECT unitPrice FROM item WHERE itemCode='+req.params.id,function(err,result){
        if(err){
            throw err;
        }else{
            if(result.length<0){
                res.send({
                    data:[{
                        unitPrice:0
                    }]
                })
            }else{
                
            res.send({
                data:result
            })
        }
        }
    })
})





module.exports = router;
