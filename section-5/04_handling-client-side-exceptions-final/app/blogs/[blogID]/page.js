const Blog = async ({ params }) => {
  const { blogID } = await params;

  const randomNumber = Math.random();
  console.log(randomNumber);
  
  if (randomNumber > 0.5) {
    throw new Error("Error occurred");
  }

  return (
    <>
      <div>
        <h1>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
