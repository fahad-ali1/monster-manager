import mongoose from "mongoose";

mongoose.set('strictQuery', true);

// Connect to local database
export const connectDB = async () => {
  // const url = `mongodb://localhost:27017/monsters`;
  const url = 'mongodb+srv://'+NAME+':'+PASSWORD+'@cluster0.dv9mrjt.mongodb.net/'

  try {
    const connection = await mongoose.connect(url, {
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (e) {
    console.log("Failed to connect database:", e);
  }
};