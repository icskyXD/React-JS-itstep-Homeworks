const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ActionsRouter = require("./routers/ActionsRouter");
const productRouter = require("./routers/productRouter")
const moneyRouter = require('./routers/moneyRouter')
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"))

mongoose.connect(
  `mongodb+srv://icsky:admin@react-exam.s2zncjn.mongodb.net/?retryWrites=true&w=majority`,
  (error) => {
    if (error) {
      console.log("ERORR", error);
    } else {
      console.log("success");
      app.use("/actions", ActionsRouter);
      app.use("/products", productRouter);
      app.use("/money", moneyRouter);
      app.listen(8080);
    }
  }
);
