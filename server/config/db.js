const mongoose = require("mongoose");
const db = "mongodb+srv://admin:admin12345@cluster0.7avhbos.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async() => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB is Connected Successfully!");
    
  } catch (error) {
    console.error(error.message);
    process.exit(1);
    
  }
}

module.exports = connectDB;