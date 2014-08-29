var Hapi = require('hapi'),
    port = process.env.PORT || 3000,
    server = new Hapi.Server(port);

// schedule A file
server.route({
    method: 'GET',
    path: '/scheduleA',
    handler: function(req, res){
        res.file('./data/Form_460_-_Schedule_A_-_Monetary_Contributions.csv')
    }
});

// schedule E
server.route({
    method: 'GET',
    path: '/scheduleE',
    handler: function(req, res){
        res.file('./data/Form_460_-_Schedule_E_-_Payments_Made.csv')
    }
});

// Summary Totals
server.route({
    method: 'GET',
    path: '/summaryTotals',
    handler: function(req, res){
        res.file('./data/Form_460_-_Summary_Totals.csv')
    }
});

// serve static files
server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: { path: './public', listing: false, index: true }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});