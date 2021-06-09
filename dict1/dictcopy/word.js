exports.search =function(req, res ,vals){
    var mysql = require('mysql');
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Jestinod98661",
      database: "entries"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      con.query(`SELECT wordtype, definition FROM entries.entries  where word = '${vals.wordSearch}'`, function (err, result, fields) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<!DOCTYPE html>");
        res.write("<html>");
        res.write("<head><meta charset=\"utf-8\"/>"); 
        res.write("<title> WAP Online Dictionary </title>");
        res.write("</head>");
        res.write("<body>");
        
        
    
    for (var i = 0; i < result.length; i++){
        res.write("<p>"+ (i + 1) +"(" + result[i].wordtype + ")"+ " :: " + result[i].definition + "</p>");
    
    }
        
        
        res.write("</body>");
        res.write("</html>");
        return res.end();
       
    
      });
    });
    
    
    }