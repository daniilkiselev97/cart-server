const jsonServer = require('json-server'); //подключение json-server
const server = jsonServer.create();
const router = jsonServer.router('db.json'); //его старт c файла db.json
const middlewares = jsonServer.defaults();
const port = 8000; //старт на порте 8000

server.use(middlewares);
server.use(router);

server.listen(port);