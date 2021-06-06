var express = require('express');
var mysql = require('mysql');
var app = express();
var connection = require('/Users/Mitiku/Documents/GitHub/mitikud.github.io/prac/database')
app.get('/', function(req, res){
    let sql = "SELECT * FROM employee";
    connection.query(sql, function(err, result){
        if(err) throw err;
        res.send(result);
    });
});
app.listen(8080, function(){
    console.log("App listening on port 300");
    connection.connect(function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("database connected!");
    });
});
