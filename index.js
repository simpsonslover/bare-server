import http from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/");

const server = http.createServer((req, res) => {
  bare.routeRequest(req, res);
});

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log("Bare server running on port", port);
});
