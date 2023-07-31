const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../Models/User");

module.exports = (passport) =>{
passport.use(new FacebookStrategy({
    clientID : process.env.FACEBOOK_CLIENT_APP_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_APP_SECRET,
    callbackURL : "http://localhost:8000/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'emails']
}, async (accessToken, refreshToken, profile, done) =>{
    try {
       console.log(profile); // Log the profile data
       // checking for user Facebook ID in our database
       const existingUser = await User.findOne({ "provider_id" : profile.id });
       if(existingUser){
           return done(null, existingUser);
       }
       // If not, create a new user 
       const newUser = User({
           username: profile.displayName,
           email: profile.emails[0].value,
           provider: 'facebook',
           provider_id: profile.id
       });
        await newUser.save();
        return done(null, newUser);
    } 
    catch (error) {
            return done(error, false)
        }
}));}