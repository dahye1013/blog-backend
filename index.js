import express from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import path from "path";
const app = express();
const server = createServer(app);
const PORT = 8080;
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/reg", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/reg_save", (req, res) => {
  let a = req.body.code;
  let b = req.body.title;
  console.log(a, b);
  res.send("<h2>넘어온코드=" + a + "  넘어온제목=" + b + "</h2>");
  //res.send(req.body);
});

server.listen(PORT, () => {
  console.log("index.js  hello snow");
  console.log(`server running   http://localhost:${PORT}`);
});
