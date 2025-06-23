"use server";

import { z } from "zod/v4";
import { registerSchema } from "@/lib/schema/userSchema";

export async function registerUser(_, formData) {
  const { success, data, error } = registerSchema.safeParse(formData);

  if (!success) {
    console.log(z.flattenError(error).fieldErrors);
    return { errors: z.flattenError(error).fieldErrors };
  }

  return { message: `${formData.email} registered`, data };
}
