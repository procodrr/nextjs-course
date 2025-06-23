"use server";

export async function registerUser(_, formData) {
  console.log(formData);
  return { message: `${formData.email} registered` };
  // return { error: `${formData.email} not registered` };
}
