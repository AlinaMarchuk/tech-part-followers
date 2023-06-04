import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className={css.mainSection}>
          <div className={css.container}>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layout;
