import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DATABASE_URL;

const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const connectDB = async () => {
  try {
    await mongoose.connect(uri, options);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Database connection error: ${error}`);
  }
};

export default connectDB;
