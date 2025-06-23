"use server";

export async function registerUser(formData) {
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  return { message: "Got the data" };
}
