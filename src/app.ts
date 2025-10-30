import express from "express";
import tasksRouter from "./routes/tasks.js";
import { errorHandler } from "./middleware/errorHandler.js";
import morgan from "morgan";
import cors from "cors";

// This file creates teh express instance and exports it.
// In the future we will also apply global middleware here.
// In the future we will also mount routers here.

const app: express.Application = express();

// Core middleware
// This middleware is used to parse incoming request bodies in a JSON format into javascript objects.
app.use(express.json());
// This middleware is used to enable CORS.
app.use(cors()); // TODO: Configure this more strictly in prod
// This middleware is used to log incoming requests to the console.
app.use(morgan("dev")); // TODO: Consider using combined logging in prod

// Mount route modules
app.use("/tasks", tasksRouter);

// Error handling middleware (must come after all routes)
app.use(errorHandler);

export default app;
