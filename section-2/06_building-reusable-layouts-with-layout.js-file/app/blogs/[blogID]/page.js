export default async function Blog({ params }) {
  const { blogID } = await params;
  return <div>Blog {blogID}</div>;
}
