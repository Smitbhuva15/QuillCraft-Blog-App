import mongoose from 'mongoose';


const connect = async () => {

  try {
  
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully!");
  }
    catch (error) {
      console.error("Database connection failed:", error.message);
      console.error("Error stack:", error.stack);
      throw new Error("Database connection failed");
    }
};

export default connect;
