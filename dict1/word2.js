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
        res.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>')
        res.write('<link href="dict.css" type="text/css" rel="stylesheet" />')
        res.write("<title> WAP Online Dictionary </title>");
        res.write("</head>");
        res.write("<body>");
        res.write('<div id="header"><h1>WAP Online Dictionary</h1></div>')
        res.write('<div id="section">')
        res.write('<form id="form" action="http://localhost:8080/word.js" method="GET">')
        res.write('Term: <input type="text" id="wordSearch" name="wordSearch"><button id="submit" type="submit" name="lokup">Lookup</button>')
        res.write('</form>')
        res.write('</div>')
        res.write('<div id="main">')
        res.write('<ul id="dictionary">')
        res.write('<li>definition here</li>')
        res.write('</ul>')
        res.write('</div>')
        res.write("<ol>")
    
    for (var i = 0; i < result.length; i++){
        res.write("<li>"+ "(" + result[i].wordtype + ")"+ " :: " + result[i].definition + "</li>");
    
    }
        
        res.write("</ol>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
       
    
      });
    });
    
    
    }