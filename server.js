const http = require("http");

let server = http.createServer();
server.on("request", (request, response) => {
  response.writeHead(200);
  response.end("salut comment ça va?");
});

server.listen(8080);
