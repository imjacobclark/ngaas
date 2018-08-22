const Generator = require('../src/Generator');

exports.handler = (event, context, callback) => {
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            name: new Generator().randomName(),
        }),
        headers: {
            'Content-Type': 'application/json',
            'X-Powered-By': 'Name generator as a service (ngaas)'
        }
    });
}