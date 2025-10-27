import express from "express";

// This file creates teh express instance and exports it.
// In the future we will also apply global middleware here.
// In the future we will also mount routers here.

const app: express.Application = express();

// This middleware is used to parse incoming request bodies in a JSON format into javascript objects.
app.use(express.json());

export default app;
