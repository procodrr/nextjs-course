import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";

export async function GET() {
  await connectDB();
  const allTodos = await Todo.find();

  return Response.json(
    allTodos.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}

export async function POST(request) {
  await connectDB();

  const todo = await request.json();
  const { id, text, completed } = await Todo.create({ text: todo.text });

  return Response.json(
    { id, text, completed },
    {
      status: 201,
    }
  );
}
