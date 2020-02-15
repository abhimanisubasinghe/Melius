var express = require('express');
var router = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');

//Display Storage Details
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM storage', function(err, result) {
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

//Add New Storage Location
router.post('/add',function(req,res,next){
    var order={
        unit:req.body.unit,
        number:req.body.number
    }

    var item={}

    connection.query("INSERT INTO storage SET ?",order,function(err){
                if(err){
                    console.log(err);
                    res.redirect('/items');
                }
                else{
                    req.flash('success','data inserted successfully');
                    res.redirect('/items');
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
