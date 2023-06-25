const http = require('http');
const app = require('./app')

app.set('port', process.env.port || 3000);
const server = http.createServer(app); // créer le server à partir du code app.js

server.listen(process.env.port || 3000);