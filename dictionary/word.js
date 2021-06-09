const sql = require('mysql');
const http = require('http');

exports.searchDatabase = (req, res, lookupWord) => {
    let searchword = lookupWord.word;
    var sql = require('mysql');
    // config for your database
    var con = sql.createConnection({
        host: "localhost",
        user: "root",
        password: "Jestinod98661", 
        databas: "entries",
        
    });

    con.connect((err) => {
        if (err) throw err;
       // console.log("connection established!");
        con.query(`select * from entries WHERE word = '${searchword}' `, (err, result, fields) => {
            if (err) throw err;
           // console.log(result);
            //console.log(result.length, "size");

            res.json(result);

            // res.send(result);
        });
    });
}