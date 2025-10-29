import { Request, Response } from "express";
import { tasks } from "../models/taskModel.js";

// When we use _req, we are saying that we are not using the request object.
// When we don't specify res.status, it will default to 200.
export const getTasks = (_req: Request, res: Response) => res.json(tasks);

export const getTask = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
};

export const createTask = (req: Request, res: Response) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
