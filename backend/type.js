import { z } from "zod";

const CreateTodo = z.object({
  title: z.string(),
  description: z.string(),
});

const UpdateTodo = z.object({
  id: z.string(),
});

module.exports = {
  CreateTodo: CreateTodo,
  UpdateTodo: UpdateTodo,
};
