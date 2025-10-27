import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  //   updateTask,
  //   deleteTask,
} from "../controllers/tasksController";
import { validate } from "../middleware/validate";
import { createTaskSchema } from "../schemas/taskSchemas";

const router: Router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", validate(createTaskSchema), createTask);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);

export default router;
