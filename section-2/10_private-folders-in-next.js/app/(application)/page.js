import Link from "next/link";
import ComponentPage from "../_components/page";

export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1>
      <ComponentPage />
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>{" "}
      <p>
        <Link href="/about">About</Link>
      </p>{" "}
      <p>
        <Link href="/services">Services</Link>
      </p>
      <p>
        <Link href="/files">Files</Link>
      </p>
    </>
  );
}
