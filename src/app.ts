import express from "express";
import tasksRouter from "./routes/tasks";

const app = express();
app.use(express.json());
app.use("/tasks", tasksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
