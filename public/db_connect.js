const mysql = require('mysql');

//menggunakan databases
const db = mysql.CreateConnection({
    host : "localhost",
    user : "root",
    password : ""
  });

  db.conect(function(err){
if (err) throw err;
    console.log("connected");
  })