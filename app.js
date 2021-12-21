import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const port = 4000;

app.get("/", (req, res) => res.send("send message..."));
server.listen(port, () => {
  console.log("Listening Server...");
});
