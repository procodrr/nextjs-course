import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";

export async function POST(request) {
  await connectDB();
  const user = await request.json();
  try {
    const newUser = await User.create(user);
    return Response.json(newUser, {
      status: 201,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return Response.json(
        { error: "Email already exists" },
        {
          status: 409,
        }
      );
    } else {
      return Response.json(
        { error: "Something went wrong" },
        {
          status: 500,
        }
      );
    }
  }
}
