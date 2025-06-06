import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";
import connectMongoDB from "@/lib/mongodb";

console.log("object 2");

export async function GET() {
  const db = await connectMongoDB();
  const usersCollection = db.collection("users");
  const users = await usersCollection.find().toArray();
  console.log(users);
  return Response.json(users);
  // const todoJSONString = await readFile("./todos.json", "utf-8");
  // const todos = JSON.parse(todoJSONString);
  // return Response.json(todos);
}

export async function POST(request) {
  const todo = await request.json();
  const newTodo = {
    id: crypto.randomUUID(),
    text: todo.text,
    completed: false,
  };

  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  return Response.json(newTodo, {
    status: 201,
  });
}
