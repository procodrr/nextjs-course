import User from "@/models/userModel";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const errorResponse = Response.json(
    { error: "Please login" },
    {
      status: 401,
    }
  );
  const userId = cookieStore.get("userId")?.value;
  if (!userId) {
    return errorResponse;
  }
  const user = await User.findById(userId);

  if (!user) {
    return errorResponse;
  }

  return user;
}
