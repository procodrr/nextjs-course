import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import { cookies } from "next/headers";

export async function GET(request) {
  await connectDB();
  const cookieStore = await cookies();
  const allTodos = await Todo.find();

  // console.log(cookieStore.get("userId").value);
  cookieStore.set("userId", "1234", {
    httpOnly: true,
    maxAge: 5,
  });

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
