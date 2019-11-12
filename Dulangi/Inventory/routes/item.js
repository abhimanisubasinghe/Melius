var express = require('express');
var router = express.Router();
var connection = require('../lib/db');

router.get('/add', function(req, res, next) {

    res.render('items/add', {
        title: 'Add new item',
        name: '',
        email: ''
    })
});

// ADD NEW USER POST ACTION
router.post('/add', function(req, res, next) {
    req.assert('name', 'Name is required').notEmpty()
});










module.exports = router;