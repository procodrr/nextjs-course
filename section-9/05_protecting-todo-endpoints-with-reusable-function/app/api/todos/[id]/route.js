import Todo from "@/models/todoModel";
import { connectDB } from "@/lib/connectDB";
import { getLoggedInUser } from "@/lib/auth";

export async function GET(_, { params }) {
  await connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const { id } = await params;
  const todo = await Todo.findOne({ _id: id, userId: user.id });
  if (!todo) {
    return Response.json(
      { error: "Todo not found" },
      {
        status: 404,
      }
    );
  }
  return Response.json(todo);
}

export async function PUT(request, { params }) {
  await connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const editTodoData = await request.json();
  const { id } = await params;
  const editedTodo = await Todo.updateMany(
    { _id: id, userId: user.id },
    editTodoData,
    {
      new: true,
    }
  );

  return Response.json(editedTodo);
}

export async function DELETE(_, { params }) {
  await connectDB();
  const user = await getLoggedInUser();
  if (user instanceof Response) return user;

  const { id } = await params;
  await Todo.deleteOne({ _id: id, userId: user.id });
  return new Response(null, {
    status: 204,
  });
}
