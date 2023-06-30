const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3150);
const server = http.createServer(app); // créer le server à partir du code app.js

server.listen(process.env.PORT || 3150);