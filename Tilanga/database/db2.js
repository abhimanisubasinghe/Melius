var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_login1'
});

con.connect(function(err){
    if(err) throw err;
});

module.exports = con;