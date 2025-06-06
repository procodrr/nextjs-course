import { connectDB } from "@/lib/connectDB";
import Todo from "@/models/todoModel";
import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function GET(request) {
  await connectDB();
  const cookieStore = await cookies();

  const userId = cookieStore.get("userId")?.value;
  console.log({ userId });
  const user = await User.findById(userId);

  if (!user) {
    return Response.json(
      { error: "Please login" },
      {
        status: 401,
      }
    );
  }

  const allTodos = await Todo.find({ userId });

  return Response.json(
    allTodos.map(({ id, text, completed }) => ({ id, text, completed }))
  );
}

export async function POST(request) {
  await connectDB();
  const cookieStore = await cookies();

  const userId = cookieStore.get("userId")?.value;
  console.log({ userId });
  const user = await User.findById(userId);

  if (!user) {
    return Response.json(
      { error: "Please login" },
      {
        status: 401,
      }
    );
  }

  const todo = await request.json();
  const { id, text, completed } = await Todo.create({
    text: todo.text,
    userId,
  });

  return Response.json(
    { id, text, completed },
    {
      status: 201,
    }
  );
}
