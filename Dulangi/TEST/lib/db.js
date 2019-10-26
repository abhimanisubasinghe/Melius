var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: ' ',
    database: 'self&store'
});

connection.connect(function(error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('connected!');
    }
});

module.exports = connection;