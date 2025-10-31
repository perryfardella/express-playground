import { z } from "zod";

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
  }),
});

export const updateTaskSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(1, "Title must contain at least 1 character")
      .optional(),
    completed: z.boolean().optional(),
  }),
  params: z.object({
    id: z.string().min(1, "Task ID is required"),
  }),
});

export const idParamSchema = z.object({
  params: z.object({
    id: z.string().min(1, "Task ID is required"),
  }),
});
