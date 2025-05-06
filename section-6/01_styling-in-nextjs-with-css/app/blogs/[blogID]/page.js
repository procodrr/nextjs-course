import "./blogID.css";

const Blog = async ({ params }) => {
  const { blogID } = await params;

  return (
    <>
      <div className="blogId">
        <h1 className="title">Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
