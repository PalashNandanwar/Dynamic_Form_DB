/* eslint-disable no-undef */
const jsonServer = require("json-server"); // Import json-server
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; // Choose a port (8080, 3001, etc.)

server.use(middlewares);
server.use(jsonServer.bodyParser); // Enable JSON body parsing
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});
