var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'employee',
    user: 'mitiku',
    password: 'Jestinod98661'
});

module.exports = connection ;