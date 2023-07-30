const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User =  require("../Models/User")

module.exports = (passport) =>{
     passport.use(new GoogleStrategy({
         clientID : process.env.GOOGLE_OAUTH_CLIENT_ID,
         clientSecret : process.env.GOOGLE_OAUTH_CLIENT_SECRET_ID,
         callbackURL : "http://localhost:8000/auth/google/callback",
         passReqToCallback : true
     },
     async (request, accessToken, refreshToken, profile, done) =>{
         try {
            // checking for user Google ID in our database
             const existinguser = await User.findOne({"provider_id" : profile.id});
             if(existinguser){
                return done(null,existinguser)
             }
             const newUser = User({
                username: profile.displayName,
                email: profile.emails[0].value,
                provider: 'google',
                provider_id: profile.id
             })
             await newUser.save();
             return done(null,newUser);
         } catch (error) {
            return done(error, false)
            
         }
     }
  ))
}