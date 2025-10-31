import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // TODO: Come up with an effective strategy to handle index syncing in dev and prod
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
};
