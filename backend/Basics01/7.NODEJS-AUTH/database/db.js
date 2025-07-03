const mongoose=require('mongoose');

const connectToDB=async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
    }catch(e){
        console.log('MongoDB connection error:', e);
        process.exit(1); // Exit the process with failure
    }
}
module.exports=connectToDB;