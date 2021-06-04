var http = require('http');
var dt = require('/Users/Mitiku/Desktop/jquery/lab/nodejs/myDate');
var st = require('/Users/Mitiku/Desktop/jquery/lab/nodejs/myModule');
http.createServer(function (req, res) {
res.writeHead(200,
    {'Content-Type': 'text/html'});
res.write("The date and time are currently: " + dt.myDate());
res.write("My name is :" + st.getName() + "  I am living in " + st.getLocation() + " and " + st.dob + " years old");
res.end();
}).listen(8081); 