"use server";

import { z } from "zod/v4";
import bcrypt from "bcrypt";
import { registerSchema } from "@/lib/schema/userSchema";
import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";

export async function registerUser(_, formData) {
  const { success, data, error } = registerSchema.safeParse(formData);

  if (!success) {
    console.log(z.flattenError(error).fieldErrors);
    return { success: false, errors: z.flattenError(error).fieldErrors };
  }

  await connectDB();
  try {
    const { name, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return { success: true, message: "User registered successfully" };
  } catch (err) {
    if (err.code === 11000) {
      return {
        errors: {
          email: "Email already exists",
        },
      };
    } else {
      return {
        errors: {
          name: "Something went wrong.",
        },
      };
    }
  }

  return { message: `${formData.email} registered`, data };
}
