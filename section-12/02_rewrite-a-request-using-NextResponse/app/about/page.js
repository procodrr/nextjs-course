import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function () {
  const cookieStore = await cookies();
  if (!cookieStore.get("sid")) {
    redirect("/login");
  }
  return <div>About Page</div>;
}
