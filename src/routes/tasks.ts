import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  //   updateTask,
  //   deleteTask,
} from "../controllers/tasksController.js";
import { validate } from "../middleware/validate.js";
import { createTaskSchema } from "../schemas/taskSchemas.js";

const router: Router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", validate(createTaskSchema), createTask);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);

export default router;
