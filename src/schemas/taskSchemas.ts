import { z } from "zod";

// Schema for creating a new task
export const createTaskSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title too long"),
});
