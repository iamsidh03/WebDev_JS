// const User = require('../models/user');
const User =require('../models/user');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

//register endpoints

const registerUser =async(req,res)=>{
    try{
        //extract user information from user body
        const {username,email,password,role}=req.body;
        //check if the user is alraedy 
        const checkExistingUser=await User.findOne({$or:[{username},{email}]});
        if(checkExistingUser){
            return res.status(400).json({
                success:false,
                message:"user already exists",
            })
        }
        //hash user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        //create a new user and save in your database
        const newlyCreatedUser=new User({
            username,
            email,
            password:hashedPassword,
            role :role ||'user',// default role is 'user' if not provided
        });
        await newlyCreatedUser.save();
        //send response to the user

        if(newlyCreatedUser){
            return res.status(201).json({
                success:true,
                message:"User registered successfully",
                user:newlyCreatedUser
            });
        }
        else{
            res.status(400).json({
                success:false,
                message:'User registration failed',
                user:newlyCreatedUser
            })
        }


    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess:false,
            message:"Internal server error"});
    }
}
// logingin endpoints
const loginUser =async(req,res)=>{
    try{
        const {username,password}=req.body;
        //check if the user exists
        const user =await User.findOne({ username })
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found",
            });
        }
        //check if the password is correct
        const isPasswordMatch =await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"Invalid credentials",
            });
        }

        //creat euser token
        const accesToken=jwt.sign({
            iserId :user._id,
            username :user.username,
            role:user.role
        },process.env.JWT_SECRET_KEY,{
            expiresIn:'50m'
        })
        res.status(200).json({
            success:true,
            message:"User logged in successfully",
            user:{
                id:user._id,
                username:user.username,
                email:user.email,
                role:user.role
            },
            accesToken // send the access token in the response
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
            sucess:false,
            message:"Internal server error"});
    }
}

module.exports={loginUser,registerUser}