import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function () {
  console.log(process);
  const cookieStore = await cookies();
  if (!cookieStore.get("sid")) {
    redirect("/login");
  }
  return <div>About Page</div>;
}
