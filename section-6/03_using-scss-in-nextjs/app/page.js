import styles from "./home.module.css";
import styles2 from "./home.module.scss";

const Home = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles2.para}>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;
