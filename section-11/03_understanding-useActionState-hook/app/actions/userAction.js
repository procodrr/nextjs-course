"use server";

export async function registerUser(previousData, formData) {
  console.log({ previousData });
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  // return { message: `${formData.get("email")} registered` };
  return { error: `${formData.get("email")} not registered` };
}
