var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jestinod98661",
  database: "entries"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM entries.entries", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});