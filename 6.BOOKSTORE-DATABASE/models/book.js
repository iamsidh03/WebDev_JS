const mongoose=require('mongoose');
const BookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Book title is required'],
        trim:true,
        maxLength:[100,'Book title cannot exceed 100 characters']
    },

   author:{
        type:String,
        required:[true,'Author name is required'],
        trim:true,
       year:{
        type:Number,
        required:[true,'Year is required'],
        min:1800,
        max:[new Date().getFullYear(),'Year cannot be in the future']
       },
       createdAt:{
        type:Date,
        default:Date.now
       }
    }
})
module.exports=mongoose.model('Book',BookSchema);
// This code defines a Mongoose schema for a book, including fields for title, author,