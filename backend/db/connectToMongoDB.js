import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Error connecting to MongoBD", err.message);
  }
};

export default connectToMongoDB;
