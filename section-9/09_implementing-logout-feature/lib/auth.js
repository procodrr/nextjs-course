import Session from "@/models/sessionModel";
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
  const cookie = cookieStore.get("sid")?.value;

  if (!cookie) {
    return errorResponse;
  }

  const sessionId = verifyCookie(cookie);

  if (!sessionId) {
    return errorResponse;
  }

  const session = await Session.findById(sessionId);

  if (!session) {
    return errorResponse;
  }

  const user = await User.findById(session.userId).select("-password -__v");
  if (!user) {
    return errorResponse;
  }
  return user;
}

export async function getUserSessionId() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get("sid")?.value;
  return verifyCookie(cookie);
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
