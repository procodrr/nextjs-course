export default async function Comments() {
  await new Promise((resolve) => setTimeout(resolve, 15000));
  return <div>500 Comments</div>;
}
