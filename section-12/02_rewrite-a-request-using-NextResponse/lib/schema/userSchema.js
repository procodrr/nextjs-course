import { z } from "zod/v4";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Enter at least 8 characters, with uppercase, lowercase, and a number."
    ),
});

export const registerSchema = loginSchema.extend({
  name: z
    .string()
    .min(3, "Name should be at least 3 characters")
    .max(100, "Name should be at max 100 characters"),
});
