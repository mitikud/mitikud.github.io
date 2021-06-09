const sql = require('mysql');
const http = require('http');

exports.searchDatabase = (req, res, lookupWord) => {
    let searchword = lookupWord.word;
    var sql = require('mysql');
    var con = sql.createConnection({
        host: "localhost",
        user: "root",
        password: "Jestinod98661", 
        database: "entries",
        
    });

    con.connect((err) => {
        if (err) throw err;
            con.query(`select * from entries WHERE word = '${searchword}' `, (err, result, fields) => {
            if (err) throw err;
                res.json(result);
        });
    });
}