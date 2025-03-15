"use server";
import fs from "fs/promises";

export async function createUser(formData) {
  await fs.writeFile(
    "./test.txt",
    `${formData.get("username")}, ${formData.get("email")}`
  );
  const username = formData.get("username");
  const email = formData.get("email");

  console.log(username, email);

  return { success: true, message: `User ${username} created successfully!` };
}
