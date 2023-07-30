const userModel = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Passport } = require("passport");


const signUpWithEmail = async (req,res) =>{
    // existing user check
    const {username , email , password} = req.body;
    try{
        // checking existing user
        const existinguser = await userModel.findOne({  username : username  });
        if(existinguser){
            return res.status(400).json({message : "Username Already exists",errorCode : "register.exists.username"})
        }

        const existingEmail = await userModel.findOne({  email : email  });

        if(existingEmail){
            return res.status(400).json({message : "Email Already exists",errorCode : "register.exists.email"})
        }
        // hashing password
        const hashedPassword = await bcrypt.hash(password,10);
        // user create
        const result  = await userModel.create({
            email : email,
            password : hashedPassword,
            username : username
        });
        // token generate
        const token = jwt.sign({
            email: result.email,
            id: result._id
        },
        process.env.JWT_TOKEN_SECRET_KEY);

        // sending response to client
        res.status(201).json({user:result,token:token});

    }
    catch (error){
        console.log(error);
        res.status(500).json({message : "Something went wrong"})
    }

}

const signInWithEmail = async (req,res) =>{
    const {email , password} = req.body;

    try{
        const existinguser = await userModel.findOne({email:email});
        if(!existinguser){
            return res.status(404).json({message : "User not exists",errorCode : "user.doesnotexists"})
        }
        const matchPassword = await bcrypt.compare(password,existinguser.password);
        
        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials",errorCode : "user.incorrectPassword"})
        }

        const token = jwt.sign({
            email: existinguser.email,
            id: existinguser._id
        },
        process.env.JWT_TOKEN_SECRET_KEY,{ expiresIn: '12h' });

        return res.status(200).json({
            user: existinguser,
            token : token
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : "Something went wrong"})
    }
    
}


const GoogleAuthCallback = async (req,res) =>{
    const token = jwt.sign({
                            id: req.user.id },
                            process.env.JWT_TOKEN_SECRET_KEY,
                            { expiresIn: '12h' }
                         );
    res.redirect(`http://localhost:3000/signup/?token=${token}`);
}


module.exports = {signUpWithEmail,signInWithEmail,GoogleAuthCallback}