var Hapi = require('hapi'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port);

// DATABASE
var collectionData = require('./server/config/mongodb')();

// ROUTES
require('./server/config/routes')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});