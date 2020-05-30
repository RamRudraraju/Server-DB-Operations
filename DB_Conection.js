var mysql = require('mysql');

// Connecting to MySQL using NodeJS
console.log("mysql DB Connection");


// Creating a connection. 
var con = mysql.createConnection({ // (host, port, user, password) are the default values we got from MAMP Server in Local.
    host: "localhost", 
    port: 8889,
    user: "root",
    password: "root"

})

// Connecting to MySQL
con.connect(function(err){
   if(err) throw err;

   console.log("Connected to Database !!!");
})