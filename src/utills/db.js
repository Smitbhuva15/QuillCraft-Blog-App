import mongoose from 'mongoose';

// Function to handle database connection
const connect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
  
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Database connection failed");
  }
};

export default connect;
