var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');

//Display GRN Details
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM grn', function(err, result) {
        if (err) {
            throw err;
        } else {
            if(result.length>0){
                res.json(result);
            }
            else{
                res.json('No items');
            }
        }
    });

});

//Add New Good Receipt Note
router.post('/add',function(req,res,next){
    
    var note={
        POId:req.body.POId,    
        deliveryDate: req.body.deliveryDate,
        postingDate:new Date(),
        documentDate: req.body.documentDate,
        supplierId: req.body.supplierId,
        deliveryNoteId:req.body.deliveryNoteId,
        total: req.body.total,
        remarks: req.body.remarks,
    }

    var item=req.body.item;

    connection.query("INSERT INTO grn SET ?",note,function(err){
                if(err){
                    console.log(err);
                    res.redirect('/items');
                }
                else{
                    for(i=0;i<item.length;i++){
                        item[i].GRNId=result.insertId;
                        connection.query('INSERT INTO grn_item SET ?',item[i],function(err){
                            if(err){
                                req.flash('error', 'Error inserting data');
                                console.log(err);
                            }else{
                                req.flash('success', 'Data inserted succesfully');
                                //res.redirect('/items');
                            }
                        })
                    }
                }
    })
});

//Update Storage Unit

router.post('/update/(:id)', function(req, res, next) {
    
    var items = {
        unit: req.body.name,
        number: req.body.number,
        status: req.body.status,
    };
    connection.query('UPDATE storage SET ? WHERE Id=' + req.params.id, items, function(err) {
        if (err) {

            req.flash('error', err);
            res.redirect('/items');

        } else {
            req.flash('success', 'Data updated successfully!');
            res.redirect('/items');
        }
    });
});

//Delete Storage Unit

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

module.exports = router ;
