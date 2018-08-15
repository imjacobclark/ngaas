const express = require('express');
const app = express();
const Generator = require('./generator');

let requests = 0;

app.get('/', function (req, res) {
    requests++;

    res.header('Access-Control-Allow-Origin', '*');
    res.header('X-Powered-By', 'Name generator as a service (ngaas)');
    
    res.json({
        name: new Generator().randomName(),
        requestsSinceLastDeploy: requests,
        builtBy: "Jacob Clark | https://www.jacobclark.xyz | @imjacobclark"
    });
});

app.listen(process.env.PORT || 3000);
