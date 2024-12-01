const express = require("express");
import { CreateTodo, UpdateTodo } from "./type";
const app = express();
app.use(express.json());

app.get("/todos", function (req, res) {
  const payload = req.body.payload;
  const parsepayload = CreateTodo.safeParse(payload);

  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "you enter wront input ",
    });
    return;
  }

  // code to put in mongodb
});

app.post("/todo", function (req, res) {});

app.put("/complet", function (req, res) {
  const payload = req.body.payload;
  const parsepayload = UpdateTodo.safeParse(payload);

  if (!parsepayload.sucess) {
    res.status(411).json({
      msg: "you enter wrong input ",
    });

    return;
  }
});
