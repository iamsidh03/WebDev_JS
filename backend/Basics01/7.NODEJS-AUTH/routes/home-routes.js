const express=require('express');
// const { route } = require('./auth-routes');
const authMiddleware=require('../middleware/auth-middleware');
const router=express.Router();
router.get('/welcome',authMiddleware,(req,res) =>{
    const {username,userId,role}=req.userInfo; // Extract user info from request
    res.json({
        message:"Welcome to the home page",
        user: {
            _id :userId,
            username,
            role
        }
    })
});
module.exports=router
