import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";

// Load environment variables from .env file
dotenv.config();

// This file contains all the code that only runs once (on server start).
// Keeping the startup logic separate from the business logic (routes).

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB before starting the server

    app.listen(process.env.PORT, () => {
      console.log(
        `✅ Server is running on http://localhost:${process.env.PORT}`
      );
      console.log(`🌐 Server environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
