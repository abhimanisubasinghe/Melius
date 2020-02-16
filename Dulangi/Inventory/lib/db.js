const mysql = require('mysql');

const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database:'servicecenter'
     
 });

 connection.connect(function(error) {

     if (!!error) {
         console.log(error);
     } else {
         console.log("connected");
     }
 });

 module.exports = connection;

 //require('./routes/html-routes')(app, connection);