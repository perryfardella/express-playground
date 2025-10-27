import dotenv from "dotenv";
import app from "./app";

// Load environment variables from .env file
dotenv.config();

// This file contains all the code that only runs once (on server start).
// Keeping the startup logic separate from the business logic (routes).

app.listen(process.env.PORT, () => {
  console.log(`Server is running on  http://localhost:${process.env.PORT}`);
  console.log(`Server environment: ${process.env.NODE_ENV}`);
});
