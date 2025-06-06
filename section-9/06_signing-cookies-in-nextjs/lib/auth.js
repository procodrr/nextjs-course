import User from "@/models/userModel";
import { createHmac } from "crypto";
import { cookies } from "next/headers";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const errorResponse = Response.json(
    { error: "Please login" },
    {
      status: 401,
    }
  );
  const cookie = cookieStore.get("userId")?.value;

  if (!cookie) {
    return errorResponse;
  }

  const userId = verifyCookie(cookie);

  if (!userId) {
    return errorResponse;
  }

  const user = await User.findById(userId);

  if (!user) {
    return errorResponse;
  }

  return user;
}

export function signCookie(cookie) {
  const signature = createHmac("sha256", process.env.COOKIE_SECRET)
    .update(cookie)
    .digest("hex");

  return `${cookie}.${signature}`;
}

export function verifyCookie(signedCookie) {
  const [cookie, cookieSignature] = signedCookie.split(".");
  const signature = signCookie(cookie).split(".")[1];

  if (signature === cookieSignature) {
    return cookie;
  }

  return false;
}
