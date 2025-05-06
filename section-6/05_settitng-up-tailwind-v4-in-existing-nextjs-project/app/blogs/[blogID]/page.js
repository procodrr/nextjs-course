import styles from "./blogID.module.css";

const Blog = async ({ params }) => {
  const { blogID } = await params;
  console.log(styles);

  return (
    <>
      <div className="blogId">
        <h1 className={styles.title}>Welcome to Our Blog {blogID}</h1>
        <p>This is blog {blogID} page.</p>
      </div>
    </>
  );
};

export default Blog;
