var express = require('express');
var routerThree = express.Router();
var connection = require('../lib/db');
var Promise = require('promise');


//Display purchase Requisition form
routerThree.get('/', function(req, res, next) {

    res.render('items/PR', {
        title: 'Add new purchase requisition'
    });
});

//Add New purchase Requisition
routerThree.post('/PRAdd',function(req,res,next){
    console.log("here");
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    console.log(month);
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = year + "-" + month + "-" + day;
    console.log(newdate);
    var order = {
        itemCode:req.body.itemCode,
        quantity:req.body.Qty,
        description:req.body.description,
        issuedDate:newdate,
        deliveryDate:req.body.delDate,
        storageId:req.body.storageId,
        supplierId:req.body.supplierId,        
        terms:req.body.terms,

    }

    connection.query('INSERT INTO purchaserequisition SET ?', order, function(err) {
        if (err) {
            req.flash('error', 'Error inserting data');
            console.log(err);
            res.redirect('/items');
        } else {
            req.flash('success', 'Data inserted succesfully');
            res.redirect('/items');
        }
    })


});


//Display PRs
routerThree.get('/PRs', function(req, res, next) {
    connection.query('SELECT p.Id,p.itemCode,p.quantity,p.description,p.issuedDate,p.deliveryDate,p.storageId,p.supplierId,p.terms,p.status,i.name AS itemName,s.name AS supplierName FROM item i INNER JOIN purchaserequisition p ON p.itemCode=i.itemCode INNER JOIN supplier s ON s.supplierId=p.supplierId ', function(err, result) {
        if (err) {
            throw err;
        } else {
            if(result.length>0){

                for (i = 0; i < result.length; i++) {
                    result[i].issuedDate=result[i].issuedDate.toISOString().substring(0,10);
                    result[i].deliveryDate=result[i].deliveryDate.toISOString().substring(0,10);
                  }
                  res.send({
                    data:result
                });

                
                //console.log(result[0].issuedDate.toISOString().substring(0,10));
                
            }
            else{
                res.json('No items');
            }
        }
    });

});


//Update PRs
routerThree.get('/edit/(:id)', function(req, res, next) {

    connection.query('SELECT * FROM purchaserequisition WHERE Id=' + req.params.id, function(err, rows, fields) {

        if (rows.length <= 0) {
            
            console.log(err);
            req.flash('error', 'item not found with id =', +req.params.id);
            //res.redirect('/items');
        } else {
            
           
            res.render('items/PREdit', {
                title: "Edit item",
                Id:rows[0].Id,
                itemCode:rows[0].itemCode,
                quantity:rows[0].quantity,
                description:rows[0].description,
                issuedDate:rows[0].issuedDate.toISOString().substring(0,10),
                delDate:rows[0].delDate,
                storageId:rows[0].storageId,
                supplierId:rows[0].supplierId,        
                terms:rows[0].terms,
                status:rows[0].status

            })
        }
    })

});

routerThree.post('/update/(:id)', function(req, res, next) {
       
    var order = {
        
        itemCode:req.body.itemCode,
        quantity:req.body.Qty,
        description:req.body.description,
        storageId:req.body.storageId,
        supplierId:req.body.supplierId,        
        terms:req.body.terms,
        status:req.body.status

    };
    connection.query('UPDATE purchaserequisition SET ? WHERE Id=' + req.params.id, order, function(err) {
        if (err) {
            console.log(err);
            req.flash('error', err);
            res.redirect('/items');

        } else {
            req.flash('success', 'Data updated successfully!');
            res.redirect('/items');
        }
    });
});

//Add new purchase order with reference to Purchase requisition
routerThree.get('/add/(:id)', function(req, res, next) {

    connection.query('SELECT s.name AS supplierName,s.supplierId,i.itemCode,i.name AS itemName,i.unitPrice,p.quantity,p.deliveryDate FROM purchaserequisition p INNER JOIN item i ON p.itemCode=i.itemCode INNER JOIN supplier s ON p.supplierId=s.supplierId WHERE Id=' + req.params.id, function(err, rows, fields) {

        if (rows.length <= 0) {
            
            console.log(err);
            req.flash('error', 'item not found with id =', +req.params.id);
            //res.redirect('/items');
        } else {
            
            res.render('items/PO', {
                title: "Edit item",
                Id:req.params.id,
                itemCode:rows[0].itemCode,
                itemName:rows[0].itemName,
                quantity:rows[0].quantity,
                unitPrice:rows[0].unitPrice,
                description:rows[0].description,
                issuedDate:rows[0].issuedDate,
                delDate:rows[0].deliveryDate,
                supplierId:rows[0].supplierId,
                supplierName:rows[0].supplierName,     
                

            });
        }
    })

});

routerThree.post('/add',function(req,res,next){
    var order={
        supplierId:req.body.supplierId,
        PRId:req.body.prId,
        IssuedDate:new Date(),
        EstimatedDelivery:req.body.delDate,
        Total:req.body.Qty*req.body.unit,
        DeliveryTerms:req.body.deliveryTerms,
        PaymentTerms:req.body.PaymentTerms
    }

    var item={}

    connection.query("INSERT INTO purchaseorders SET ?",order,function(err){
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

//Add new Purchase order without Purchase requisition
routerThree.get('/addPO',function(req,res,next){
    res.render('items/newPO', {
        title: 'Add new purchase order'
    });
})
routerThree.post('/addPO', function(req, res, next) {


 
    var order = {
        supplierId:req.body.supplierId,
        address:req.body.address,
        IssuedDate:new Date(),
        EstimatedDelivery:req.body.delDate,
        Total:req.body.total,
        DeliveryTerms:req.body.deliveryTerms,
        PaymentTerms:req.body.paymentTerms

    }

    var item =req.body.item;
    

    connection.query('INSERT INTO purchaseorders SET ?', order, function(err,result) {
        if (err) {
            req.flash('error', 'Error inserting data');
            console.log(err);
            res.redirect('/items');
        } else {
            for(i=0;i<item.length;i++){
                item[i].orderId=result.insertId;
                connection.query('INSERT INTO purchaseorders_item SET ?',item[i],function(err){
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

})

//Display Purchase Orders

routerThree.get('/PO', function(req, res, next) {
    connection.query('SELECT * FROM purchaseorders', function(err, result) {
        if (err) {
            throw err;
        } else {
                
            if(result.length>0){
                for (i = 0; i < result.length; i++) {
                    
                    result[i].IssuedDate=result[i].IssuedDate.toISOString().substring(0,10);
                    result[i].EstimatedDelivery=result[i].EstimatedDelivery.toISOString().substring(0,10);
                  }
                res.send({
                    data:result
                });
                
            }
            else{
                res.json('No items');
            }
        }
    });

});

//Create Good receipt note

routerThree.get('/addGR',function(req,res,next){
    res.render('/items/GR',{
            title:"Good receipt note"
    });
});

routerThree.post('/addGR/(:id)',function(req,res,next){

    var grn ={
        POId:req.body.POId,
        documentDate:req.body.documentDate,
        postingDate:req.body.postingDate,
        supplierId:req.body.supplierId,
        deliveryNoteId:req.body.deliveryNoteId,
        total:req.body.total,
        remarks:req.body.remarks
    }
    connection.query("INSERT INTO GRN SET ?",grn,function(err,result){
        
        if(err){
            req.flash('error',err);
        }
        else{

            var  item={
                GRNId:result.insertId,
                itemCode:req.bodyitemCode,
                QtyInPO:req.body.QtyInPO,
                QtyinDeliveryNote:req.body.QtyinDeliveryNote,
                unitPrice:req.body.unit,
                batch:req.body.batch,
                DOM:req.body.DOM,
                description:req.body.description

            }
            connection.query("INSERT INTO GRN_item SET ?",item,function(err){
                if(err){
                    req.flash('err',err);
                }
                else{
                    req.flash("success",'Data successfully inserted');
                }
            })
        }
    })
})



module.exports = routerThree;
