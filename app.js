var express = require('express'),
    app = express(),
    generator = require('./generator').generate;

app.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');

    res.json({
        name: generator()
    });
})

var server = app.listen(3000);
