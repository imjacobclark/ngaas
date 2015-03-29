var express 	= require('express'),
    app 		= express(),
    Generator	= require('./lib/Generator');

app.get('/', function (req, res) {
    var generator = new Generator();

    res.header('Access-Control-Allow-Origin', '*');

    res.json({
        name: generator.generateString(generator)
    });
})

var server = app.listen(3000);