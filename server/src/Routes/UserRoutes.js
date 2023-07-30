const express = require("express");
const passport = require('passport');
require("../Passport Config/GoogleAuthConfig")(passport);

const {
    signUpWithEmail,
    signInWithEmail,
    GoogleAuthCallback
} =  require("../Controllers/UserController");

const userRouter = express.Router();

userRouter.post('/signin/email', signInWithEmail);
userRouter.post('/signup/email', signUpWithEmail);

userRouter.get('/google',
        passport.authenticate('google', { scope: [ 'email', 'profile' ] })
    );

userRouter.get( '/google/callback',
                passport.authenticate("google", { session: false }),
                GoogleAuthCallback);

module.exports = userRouter;
