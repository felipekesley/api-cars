// See https://github.com/typicode/json-server#module
const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
//const middlewares = jsonServer.defaults();

// server.use(middlewares);
// // Add this before server.use(router)
// server.use(
//   jsonServer.rewriter({
//     "/api/*": "/$1",
//     "/blog/:resource/:id/show": "/:resource/:id",
//   })
// );

const rules = auth.rewriter({
  // Permission rules
  users: 600,
  cars: 600,
  makes: 640,
  // Other rules
  "/posts/:category": "/posts?category=:category",
});

server.use(rules);
server.use(auth);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
