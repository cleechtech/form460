var Hapi = require('hapi'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port);

require('./server/routes')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});