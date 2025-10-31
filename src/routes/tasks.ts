import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasksController.js";
import { validate } from "../middleware/validate.js";
import {
  createTaskSchema,
  idParamSchema,
  updateTaskSchema,
} from "../validators/taskValidator.js";

const router: Router = Router();

router.get("/", getTasks);
router.get("/:id", validate(idParamSchema), getTask);
router.post("/", validate(createTaskSchema), createTask);
router.put("/:id", validate(updateTaskSchema), updateTask);
router.delete("/:id", validate(idParamSchema), deleteTask);

export default router;
