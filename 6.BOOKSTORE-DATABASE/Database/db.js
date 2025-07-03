const mongoose = require("mongoose");
require("dotenv").config(); // To load MONGODB_URI

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas successfully");
  } catch (err) {
    console.error("❌ Error connecting to the database:", err);
    process.exit(1);
  }
};

module.exports = connectToDB;
// This code connects to a MongoDB database using Mongoose, with the connection string stored in an environment variable.
// It handles connection errors and logs success or failure messages.