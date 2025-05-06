import http from "http";

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Hello from new next.js server.");
});

server.listen(4000, () => {
  console.log("Server started on port 4000");
});
