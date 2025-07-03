const mongoose =require('mongoose');
const UserScheama = new mongoose.Schema({username:{
    type:String,
    required: true,
    unique:true,
    trim:true
},
email :{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true
},
password:{
    type:String,
    required:true
},
role:{
    type:String,
    enum:['user','admin'], // Only 'user' and 'admin' are allowed
    default:'user'
}},{timestamps:true});
module.exports=mongoose.model('User',UserScheama);
// This code defines a Mongoose schema for a User model with fields for username, email,
