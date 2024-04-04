const http = require('http');
const server = http.createServer();
server.listen(3000);
const { PORT = 3001 } = process.env;