const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://abid117:117abid@cluster0.rv9gghz.mongodb.net/freshb10?retryWrites=true&w=majority"
);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const LoginRouter = require("./src/routes/SignupRouter");
const SignupRouter=require("./src/routes/SignupRouter")
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", SignupRouter);
app.use("/", LoginRouter);



app.listen(3034, () => {
  console.log("server started on :3034");
});
