import app from "./app.js";
import { connectDB } from "./config/db.js";
import "./config/env.js";

// This file contains all the code that only runs once (on server start).
// Keeping the startup logic separate from the business logic (routes).

await connectDB(); // Connect to MongoDB before starting the server

app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on http://localhost:${process.env.PORT}`);
  console.log(`🌐 Server environment: ${process.env.NODE_ENV}`);
});
