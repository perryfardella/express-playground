import express from "express";

// This file creates teh express instance and exports it.
// In the future we will also apply global middleware here.
// In the future we will also mount routers here.

const app: express.Application = express();

export default app;
