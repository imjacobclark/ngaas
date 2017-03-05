var express = require('express'),
    app = express(),
    generator = require('./generator').generate,
    requests = 0;

app.get('/', function (req, res) {
    requests++;
    console.log(req.headers);
    
    res.header('Access-Control-Allow-Origin', '*');
    res.header('X-Powered-By', 'Name generator as a service (ngaas)');
    res.header('X-Hits', requests);
    
    res.json({
        name: generator()
    });
});

var server = app.listen(process.env.PORT || 3000);
