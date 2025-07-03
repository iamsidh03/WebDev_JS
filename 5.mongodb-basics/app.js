// Import mongoose library to interact with MongoDB easily
const mongoose = require("mongoose");

// Connect to your MongoDB Atlas cluster
mongoose
  .connect(
    "mongodb+srv://sangammukherjee2022:sangammukherjee2024@cluster0.7qjl1.mongodb.net/" // Connection string
  )
  .then(() => console.log("database connected successfully")) // Success message
  .catch((e) => console.log(e)); // Error handling

// Define the schema (structure) for User documents
const userSchema = new mongoose.Schema({
  name: String,                         // User's name
  email: String,                        // User's email
  age: Number,                          // User's age
  isActive: Boolean,                    // Status (true/false)
  tags: [String],                       // Array of tags (skills, roles, etc.)
  createdAt: { type: Date, default: Date.now }, // Timestamp of creation
});

// Create a model from the schema - this will be used to interact with the collection
const User = mongoose.model("User", userSchema);

// Define an async function to run example queries
async function runQueryExamples() {
  try {
    // -------------------------
    // CREATE: Add a new user using `create` method
    // -------------------------
    const newUser = await User.create({
      name: "Updated User",
      email: "updated@gmail.com",
      age: "75", // This will be converted to a Number automatically
      isActive: true,
      tags: ["developer"],
    });
    console.log("Created new user", newUser);

    // -------------------------
    // ALTERNATIVE: Create user using `new User()` + `save()` method
    // -------------------------
    // const newUser = new User({
    //   name: "Raj Mukherjee",
    //   email: "raj@gmail.com",
    //   age: "40",
    //   isActive: true,
    //   tags: ["developer", "designer", "manager"],
    // });
    // await newUser.save(); // Saves the document to the database

    // -------------------------
    // READ: Fetch all users
    // -------------------------
    // const allUsers = await User.find({}); // Find all documents
    // console.log(allUsers);

    // -------------------------
    // READ: Find users where isActive is true
    // -------------------------
    // const getUserOfActiveFalse = await User.find({ isActive: true });
    // console.log(getUserOfActiveFalse);

    // -------------------------
    // READ: Find one user by name
    // -------------------------
    // const getJohnDoeUser = await User.findOne({ name: "John Doe" });
    // console.log(getJohnDoeUser);

    // -------------------------
    // READ: Find by document ID
    // -------------------------
    // const getLastCreatedUserByUserId = await User.findById(newUser._id);
    // console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");

    // -------------------------
    // READ: Select specific fields (include name, email; exclude _id)
    // -------------------------
    // const selectedFields = await User.find().select("name email -_id");
    // console.log(selectedFields);

    // -------------------------
    // READ: Pagination using limit and skip
    // -------------------------
    // const limitedUsers = await User.find().limit(5).skip(1); // Skip first user, return next 5
    // console.log(limitedUsers);

    // -------------------------
    // READ: Sort users by age (ascending)
    // -------------------------
    // const sortedUsers = await User.find().sort({ age: 1 });
    // console.log(sortedUsers);

    // -------------------------
    // COUNT: Count documents where isActive is true
    // -------------------------
    // const countDocuments = await User.countDocuments({ isActive: true });
    // console.log(countDocuments);

    // -------------------------
    // DELETE: Delete user by ID
    // -------------------------
    // const deletedUser = await User.findByIdAndDelete(newUser._id);
    // console.log("deleted user ->", deletedUser);

    // -------------------------
    // UPDATE: Update user age and add new tag
    // -------------------------
    const updateUser = await User.findByIdAndUpdate(
      newUser._id, // Find user by ID
      {
        $set: { age: 100 },              // Update age to 100
        $push: { tags: "updated" },      // Add "updated" to tags array
      },
      { new: true } // Return the updated document (not original)
    );
    console.log("updated user", updateUser);
  } catch (e) {
    // Catch any error during execution
    console.log("Error ->", e);
  } finally {
    // Always close the database connection at the end
    await mongoose.connection.close();
  }
}

// Call the function to run queries
runQueryExamples();


/* | Operation                                 | Purpose                                           |
| ----------------------------------------- | ------------------------------------------------- |
| `User.create()`                           | Create and save a user document                   |
| `new User() + .save()`                    | Alternative manual creation                       |
| `User.find()`, `findOne()`, `findById()`  | Read operations                                   |
| `select()`, `limit()`, `skip()`, `sort()` | Query refinement                                  |
| `countDocuments()`                        | Count matching documents                          |
| `findByIdAndDelete()`                     | Delete by ID                                      |
| `findByIdAndUpdate()`                     | Update fields (including nested ones like arrays) |
| `mongoose.connection.close()`             | Gracefully end connection                         |
 */