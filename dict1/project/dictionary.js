const http = require('http');
const express = require('express');
const wordjs = require('./word');
const port = require('./port');

const path = require('path');

var url = require('url');

const app = express();

app.use(express.static(path.join(__dirname,'public')));
app.get('/searchword', (req,res)=>{
    let q = url.parse(req.url, true);
    
    if (q.pathname == "/searchword"){
        wordjs.searchDatabase(req, res, q.query);
        //console.log("finshed get in dictionary");
    }
});


//console.log("inside dictionary");
app.listen(port.PORT, () => { console.log(`server running on port ${port.PORT}`) });