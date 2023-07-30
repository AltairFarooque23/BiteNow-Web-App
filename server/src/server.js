const express = require("express"); 
const mongoose = require("mongoose"); 
const cors = require("cors");

const app = express();

app.use(express.json()); 
app.use(cors())

// .env configs
 const dotenv = require("dotenv"); 
 dotenv.config();

// import routes
const userRouter = require('./Routes/UserRoutes');

// add your route modules here

// default root route
app.get('/' ,(req,res)=>{ res.send("Server running on port 8000") })

// initialize the end points for the above routes
app.use("/auth",userRouter);

// connect to MongoDB cluster
mongoose.connect(`mongodb+srv://AltairFarooque:${process.env.MONGODB_API_DB_KEY}@bitenowwebapp.z4fis5r.mongodb.net/?retryWrites=true&w=majority`) 
.then(()=>{
     app.listen(8000,()=>{ console.log("server started at port 8000!") 
    })
})
.catch((error)=>{ 
    console.log(error) 
})