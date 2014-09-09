var Hapi = require('hapi'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port);

// DATABASE
var db = require('./server/config/mongodb');

var scheduleE = db.collection('scheduleE');

// ROUTES
require('./server/config/routes')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});