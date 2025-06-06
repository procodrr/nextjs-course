import { signCookie } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";
import { createHmac } from "crypto";
import { cookies } from "next/headers";

export async function POST(request) {
  await connectDB();
  const cookieStore = await cookies();
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return Response.json(
        { error: "Invalid Credentials!" },
        {
          status: 400,
        }
      );
    }

    cookieStore.set("userId", signCookie(user.id), {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    return Response.json(user, {
      status: 200,
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
