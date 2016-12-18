var express = require('express'),
    app = express(),
    generator = require('./generator').generate,
    requests = 0;

app.get('/', function (req, res) {
    requests++;
    
    res.header('Access-Control-Allow-Origin', '*');

    res.json({
        name: generator()
    });
    
    console.log(requests);
})

var server = app.listen(3000);
