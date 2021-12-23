import express from "express";
import { createServer } from "http";
import bodyParser from "body-parser";
import path from "path";
const app = express();
const server = createServer(app);
const PORT = 8080;
const __dirname = path.resolve();
/**
 * [BodyParser]
 * req.body 를 미들웨어 없이 접근 하는 경우, undefined이 설정되어 있음.
 * -> 이를 방지하고자 사용.
 *
 * BodyParser의 경우, express 빌트인되어있어서 라이브러리 사용할 필요 없음.
 * app.use(express.json()) 를 통해서 리팩토링 가능하므로 후에 다시 확인 할 것.
 * ref: https://expressjs.com/en/4x/api.html#express-json-middleware
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let uesrs = [
  {
    id: "aaa",
    pwd: "1234",
  },
  {
    id: "bbb",
    pwd: "3456",
  },
  {
    id: "dahye",
    pwd: "1234",
  },
];

app.get("/", (req, res) => {
  res.send("<h2>welcome!</h2>");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const isUser = !!uesrs.map((user) => user.id).includes(id);
  if (!isUser) return res.status(401).send(`<h2>${id}, Not User.</h2>`);
  if (isUser) res.send(`<h2>Hello! ${id}</h2>`);
});

server.listen(PORT, () => {
  console.log(`server running   http://localhost:${PORT}`);
});
