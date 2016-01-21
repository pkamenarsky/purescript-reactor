var express = require('express');
var app = express();
var bp = require('body-parser');

app.use(bp.text());

var state = "";

app.post('/set', function(req, res){
    console.dir(req.body);
    state = req.body;
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end('{\"result\": \"ok\"}');
});

app.get('/get', function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.end(state);
});

port = 8005;
app.listen(port);
console.log('Listening at http://localhost:' + port)
