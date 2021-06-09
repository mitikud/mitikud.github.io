exports.search =function(req, res ,vals){
  let word =  vals.lookUpWord;
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Jestinod98661",
      database: "entries"
    });
    

    con.connect(function(err) {
      if (err) throw err;
      console.log("inside databse ",word);
      con.query(`SELECT * FROM entries  where word = '${word}'`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      res.json(result);
       
    
      });
    });
    
    
    }