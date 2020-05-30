var mysql = require('mysql');

// Creating a connection. 
var con = mysql.createConnection({ // (host, port, user, password) are the default values we got from MAMP Server in Local.
    host: "localhost", 
    port: 8889,
    user: "root",
    password: "root",
    database: "nodeDB"
})

// Connecting to MySQL
con.connect(function(err){

   if(err) throw err;

   console.log("Connected to Database !!!");
   // Table Creation.
   var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))";

   con.query(sql, function(err, result){
       if(err) throw err;

       console.log("Table Creation !");
   });  

})