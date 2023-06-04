import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Home
        </NavLink>
        <NavLink
          to="/tweets"
          className={({ isActive }) => clsx(css.link, isActive && css.active)}
        >
          Tweets
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
