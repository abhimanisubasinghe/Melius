var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'self&store'
});

connection.connect(function(error, req) {
    if (!!error) {
        console.log(error);
    } else {
        console.log(`connected!`);
    }
});

module.exports = connection;