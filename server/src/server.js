const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors");
const cookieParser = require('cookie-parser');
const session = require("express-session");
const passport = require("passport");
const {searchRestaurants} = require("./Services/searchBarService");

const {InsertJsonToCollection} = require("./AddDataToCollection")
// user model for passport auth-session
const User = require('./Models/User')
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");

// forming connection
const io = new Server(server,{
  cors:{
    origin : "http://localhost:3000",
    methods : ['GET','POST']
  }
})


app.use(express.json()); 
app.use(cors())
app.use(cookieParser())

// .env configs
const dotenv = require("dotenv"); 
dotenv.config();

const connectURLMongoDb = `mongodb+srv://AltairFarooque:${process.env.MONGODB_API_DB_KEY}@bitenowwebapp.z4fis5r.mongodb.net/?retryWrites=true&w=majority`
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

app.get('/upload-data-to-collection',(req,res)=>{
    InsertJsonToCollection(connectURLMongoDb)
    res.send("⚠️ Do not reload this page as data is being added to collection in background! ⚠️ You can close this window now 👍🏻");
})

// initialize the end points for the above routes
app.use("/auth",userRouter);





 // search block;

 // Listen for connections
 io.on('connection', (socket) => {
    console.log('A user connected');
    // Handle search event
    // gets the data from database based on search term or query
    socket.on('search', async (searchTerm) => {
        try {
            // Call the searchRestaurants function to retrieve data
            const results = await searchRestaurants(searchTerm);
            // Emit the results to the client
            socket.emit('found', results);
          } catch (error) {
            console.error(error);
          }
    });
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });



// connect to MongoDB cluster
mongoose.connect(connectURLMongoDb)
.then(()=>{
     console.log("Connected to MongoDB🍀")
     server.listen(8000,()=>{
        console.log("server started at port 8000!"
        ) 
    })
})
.catch((error)=>{ 
    console.log(error) 
})