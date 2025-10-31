import { Request, Response, NextFunction } from "express";
import * as taskService from "../services/taskService.js";

export const getTasks = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task)
      return res
        .status(404)
        .json({ error: "Task not found with id: " + req.params.id });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;
    if (!title || typeof title !== "string") {
      return res
        .status(400)
        .json({ error: "Title is required and must be a string" });
    }
    const newTask = await taskService.createTask(title);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, completed } = req.body;
    const updatedTask = await taskService.updateTask(req.params.id, {
      title,
      completed,
    });
    if (!updatedTask)
      return res
        .status(404)
        .json({ error: "Update failed for task with id: " + req.params.id });
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleted = await taskService.deleteTask(req.params.id);
    if (!deleted)
      return res
        .status(404)
        .json({ error: "Delete failed for task with id: " + req.params.id });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
