import { auth } from "@/auth";
import SignIn from "../components/SignIn";
import { redirect } from "next/navigation";

export default async function () {
  const session = await auth();
  if (session) {
    return redirect("/");
  }
  return (
    <div>
      <SignIn />
    </div>
  );
}
