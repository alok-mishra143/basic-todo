const express = require("express");
import { CreateTodo, UpdateTodo } from "./type";
const app = express();
app.use(express.json());
import { Todo } from "./db";

app.post("/todos", async function (req, res) {
  const payload = req.body.payload;
  const parsepayload = CreateTodo.safeParse(payload);

  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "you enter wront input ",
    });
    return;
  }

  // code to put in mongodb
  await Todo.create({
    tittle: payload.tittle,
    description: payload.description,
    completed: false,
  });
  res.json({
    msg: "Todo created ",
  });
});

app.get("/todo", async function (req, res) {
  const todos = await Todo.find();
  console.log(todo);

  res.json({
    todos,
  });
});

app.put("/complet", async function (req, res) {
  const payload = req.body.payload;
  const parsepayload = UpdateTodo.safeParse(payload);

  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "you enter wrong input ",
    });

    return;
  }

  await Todo.upadte(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "todo updated",
  });
});
