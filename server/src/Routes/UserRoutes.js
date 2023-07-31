const express = require("express");
const passport = require('passport');
require("../Passport Config/GoogleAuthConfig")(passport);
require("../Passport Config/FacebookAuthConfig")(passport);

const {
    signUpWithEmail,
    signInWithEmail,
    GoogleAuthCallback,
    FacebookAuthCallback
} =  require("../Controllers/UserController");

const userRouter = express.Router();

userRouter.post('/signin/email', signInWithEmail);
userRouter.post('/signup/email', signUpWithEmail);

// google authentication for both signup or sign in
userRouter.get('/google',
        passport.authenticate('google', { scope: [ 'email', 'profile' ] })
    );

userRouter.get( '/google/callback',
                passport.authenticate("google", { session: false }),
                GoogleAuthCallback);


// facebook authentication for both signup or sign in
userRouter.get('/facebook',
        passport.authenticate('facebook', { scope: 'email' })
    );

userRouter.get( '/facebook/callback',
                passport.authenticate('facebook', { failureRedirect: '/login' }),
                FacebookAuthCallback);



module.exports = userRouter;
