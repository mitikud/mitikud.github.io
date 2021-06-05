var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = require('./database')
app.get('/', function(req, res){
    let sql = "SELECT * FROM employee";
    connection.query(sql, function(err, result){
        if(err) throw err;
        res.send(result);
    });
    
});
app.listen(3000, function(){
    console.log("App listening on port 300");
    connection.connect(function(err){
        
        console.log("database connected!");
    });
});
