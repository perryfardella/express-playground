import express from "express";
import tasksRouter from "./routes/tasks";
import { errorHandler } from "./middleware/errorHandler";

// This file creates teh express instance and exports it.
// In the future we will also apply global middleware here.
// In the future we will also mount routers here.

const app: express.Application = express();

// This middleware is used to parse incoming request bodies in a JSON format into javascript objects.
app.use(express.json());

// Mount route modules
app.use("/tasks", tasksRouter);

// Error handling middleware (must come after all routes)
app.use(errorHandler);

export default app;
