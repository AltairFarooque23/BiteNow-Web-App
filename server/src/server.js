const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const passport = require("passport")
// user model for passport auth-session
const User = require('./Models/User')
const app = express();

app.use(express.json()); 
app.use(cors())
app.user(cookieParser())

// .env configs
 const dotenv = require("dotenv"); 
 dotenv.config();

// adding session middleware for passport login

app.use(session({
    secret : process.env.EXPRESS_SESSION_SECRET_KEY,
    resave:false,
    saveUninitialized : true
}))

// initializing passport
app.use(passport.initialize());
app.use(passport.session())

// serialize and de-serialize the session user

passport.serializeUser((user,done)=>{
    done(null,user.id);
})

passport.deserializeUser(async (id,done)=>{
    try {
        const user = await User.findById(id);
        done(null, user);
      } catch (err) {
        done(err);
      }
})


// import routes
const userRouter = require('./Routes/UserRoutes');

// add your route modules here

// default root route
app.get('/' ,(req,res)=>{
    res.send("Server running on port 8000") 
})

// initialize the end points for the above routes
app.use("/auth",userRouter);

// connect to MongoDB cluster
mongoose.connect(`mongodb+srv://AltairFarooque:${process.env.MONGODB_API_DB_KEY}@bitenowwebapp.z4fis5r.mongodb.net/?retryWrites=true&w=majority`) 
.then(()=>{
     console.log("Connected to MongoDB🍀")
     app.listen(8000,()=>{
        console.log("server started at port 8000!"
        ) 
    })
})
.catch((error)=>{ 
    console.log(error) 
})