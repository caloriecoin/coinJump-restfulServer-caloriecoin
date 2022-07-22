//01.몽고디비 연결
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./Config/db")();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//02.restful api 라우터 설정
const UserRouter = require("./Routers/UserRouter");
const MinningJumpRouter = require("./Routers/MinningJumpRouter");
const BattleJumpRouter = require("./Routers/BattleJumpRouter");
const WalletRouter = require("./Routers/WalletRouter");
const RankingRouter = require("./Routers/RankingRouter");
const ProductRouter = require("./Routers/ProductRouter");

app.use("/api/user", UserRouter);
app.use("/api/minningJump", MinningJumpRouter);
app.use("/api/battleJump", BattleJumpRouter);
app.use("/api/wallet", WalletRouter);
app.use("/api/ranking", RankingRouter);
app.use("/api/product", ProductRouter);

app.get("/", (req, res) => {
  res.send(
    "헤로쿠에 서버API 디플로이 됨 2022년02월19일 오후 11시 25분 By BAEK 대표!"
  );
});

//03.socket.io (줄넘기 배틀용) 따로 만듬
const socketServer = require("http").createServer(app);

//04. 소켓서버랑 중앙서버 둘다 실행
app.listen(
  process.env.PORT,
  console.log(
    `칼로리코인(런메이트) 중앙서버작동 => by ${process.env.NODE_ENV} , http:localhost:${process.env.PORT}`
  )
);