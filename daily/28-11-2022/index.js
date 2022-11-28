import express from "express";
import http from "http";

const app = express();
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Olá Mundo");
  })
  .listen(8000, "localhost:3000");

//or

app.listen(port, () => {
  console.log(`Server running http://localhost:${port}`);
});
