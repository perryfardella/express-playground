import { TaskModel, ITask } from "../models/taskModel.js";

// Get all tasks
export const getAllTasks = async () => {
  return TaskModel.find().sort({ createdAt: -1 }).lean();
};

// Get one task by ID
export const getTaskById = async (id: string) => {
  return TaskModel.findById(id).lean();
};

// Create a new task
export const createTask = async (title: string) => {
  const task = await TaskModel.create({ title });
  return task.toObject();
};

// Update an existing task
export const updateTask = async (
  id: string,
  updates: Partial<Pick<ITask, "title" | "completed">>
) => {
  return TaskModel.findByIdAndUpdate(id, updates, { new: true }).lean();
};

// Delete a task
export const deleteTask = async (id: string) => {
  const result = await TaskModel.findByIdAndDelete(id);
  return !!result; // true if deleted, false if not found
};
