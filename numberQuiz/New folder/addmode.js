exports.add = function (req,res,vals) {
 
    var count = 0;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Number Quiz Lab</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>The Number Quiz</h1><br>");
    res.write("<p>Your current score is ");
    res.write("<span>");
    res.write(String(count) + "</span><br>");
    res.write("<form action ='http://localhost:8080/add.js'>");
    res.write("Your answer:  <input type = 'text' name='first'/><br>");
    res.write("<input type='submit' value='Click'/>");
    res.write("</form>");
    return res.end();
    };



/*     <h1><b>The Number Quiz</b></h1><br>
    <p>Your Currrent score is<span id="count"></span><br>
    Guess the next number in the sequence.<br></p> */
    