import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Technical Agency</h1>
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
