import { Router, Request, Response } from "express";

const router = Router();
let tasks = [{ id: 1, title: "Tarea inicial" }];

// Obtener todas las tareas
router.get("/", (req: Request, res: Response) => {
  res.json(tasks);
});

// Obtener una tarea por ID
router.get("/:id", (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  res.status(task ? 200 : 404).json(task || { error: "Tarea no encontrada" });
});

export default router;
