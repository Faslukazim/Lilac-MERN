const express = require("express");
const userModel = require("../models/SignupModel");
const SignupRouter = express.Router();
const LoginRouter = express.Router();
const bcrypt = require("bcryptjs");

SignupRouter.post("/signup", async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      cpassword: req.body.cpassword,
    };

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    userModel(user).save().then((user) => {
      res.status(200).json({
        message: "Registration Success",
        data: user,
      });
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      err: err,
    });
  }
});
LoginRouter.post("/login", async (req, res) => {
  try {
     const username=req.body.username;
     const password=req.body.password;
    userModel.findOne({username:username},(req,res)=>{
      if (!res) {
        return res.status(400).json({
          message: "Username not found",
        });
      }
    
      bcrypt.compare(password, user.password, (req, res) => {
        if (!res) {
          return res.status(400).json({
            message: "Incorrect password",
          });
        }
        return res.status(200).json({
          message: "Login Success",
          data: user,
        });
      });
    });
  } catch (err) {
    return res.status(500).json({
    message: "Something went wrong",
    err: err,
    });
    }
    });

module.exports=SignupRouter;
module.exports=LoginRouter;
