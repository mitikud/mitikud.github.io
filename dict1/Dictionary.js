
var http = require('http');
const url = require('url');
var fs = require('fs');
var word = require('./word.js');
const express = require('express');
const app = express();
const path = require('path');

/*
http.createServer(function(req,res){
    var q=url.parse(req.url, true)
    var qdata=q.query;
    var filename = "." + q.pathname;
    console.log(q.pathname);
    console.log("inside server");
    console.log(word.filename);
    if (q.pathname == "/word.js")
 {
   console.log(qdata)
        word.search(req, res, qdata);
   
}
 
}).listen(8080,()=>{console.log("server running")});
*/
app.use(express.static(path.join(__dirname)));

app.get('/test', (req, res) => {

  let k = url.parse(req.url, true);
console.log(k.query,"inside server try");
console.log(k.query.lookUpWord,"expected king");
  word.search(req, res, k.query);

});

app.listen(8080, () => { console.log("server running...") });
