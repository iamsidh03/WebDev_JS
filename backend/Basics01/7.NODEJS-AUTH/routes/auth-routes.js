const express=require('express');
const  {registerUser,loginUser} = require('../controllers/auth-controller');
const router=express.Router();


//all routes are related to authentication & authorization
router.post('/register',registerUser); // Register endpoint
router.post('/login',loginUser); // Login endpoint

module.exports=router