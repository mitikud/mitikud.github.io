var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "mitiku",
  password: "Jestinod98661"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});