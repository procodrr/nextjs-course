"use client";

import { usePathname } from "next/navigation";

export default function BlogNotFound() {
  const a = usePathname();
  console.log(a);
  return (
    <>
      <h1>Blog Page not found!</h1>
      <p>Could not found the page you are looking for.</p>
    </>
  );
}
