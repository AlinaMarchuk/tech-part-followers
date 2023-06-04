import css from "./Home.module.css";

const HomePage = () => {
  return (
    <>
      <h1 className={css.title}>Welcome to your home page!</h1>
      <div className={css.wrapper}></div>
    </>
  );
};

export default HomePage;
