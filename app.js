const restify = require('restify')
const routes = require('./routes/routes')
const mongoose = require('./config/database');
const server = restify.createServer();

server.use(restify.plugins.bodyParser())



routes(server);

server.listen(8040, function() {
  console.log('%s Rodando em: %s', server.name, server.url);
});
