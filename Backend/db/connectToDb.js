import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://eshankochar06_db_user:lmvBzKhdtv2cANm8@cluster0.qhhiieq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDb;
