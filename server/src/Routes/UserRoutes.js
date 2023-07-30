const express = require("express");

const {
    signUpWithEmail,
    signInWithEmail
} =  require("../Controllers/UserController");

const userRouter = express.Router();

userRouter.post('/signin/email', signInWithEmail);
userRouter.post('/signup/email', signUpWithEmail);

module.exports = userRouter;
