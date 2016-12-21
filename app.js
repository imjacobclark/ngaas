var express = require('express'),
    app = express(),
    generator = require('./generator').generate,
    requests = 0;

app.get('/', function (req, res) {
    requests++;
    console.log(req.headers);
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('X-Powered-By', 'ngaas');
    
    res.json({
        name: generator()
    });
});

app.get('/stats', function(req, res){
    res.end("Requests: " + requests);
});

var server = app.listen(3000);
