exports.add = function (req,res,vals) {
    var operator = "";
    var result = 0;
  /*   $('select').on('change', function() {
        operator = this.value ;
    });  */
     operator =vals.operator;

    if(operator == "+") {
        result = parseInt(vals.first) + parseInt(vals.second);
    }
    else if(operator == "-") {
        result = parseInt(vals.first) - parseInt(vals.second);
    }
    else if(operator == "x") {
        result = parseInt(vals.first) * parseInt(vals.second);
    }
    else{
        result = parseInt(vals.first) / parseInt(vals.second);
        
    }
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The result will be: ");
    res.write(String(result) + "<br>");
    res.write("</p>");
    res.write("<p><a href = 'index.html'>Another Calculation</a></p>")
    res.write("</body>");
    res.write("</html>");
    return res.end();
    };