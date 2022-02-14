import { Fragment } from "react";
import { FCC } from "types/react";
import { Header } from "./Header/Header";
import classes from "./Layout.module.scss";

export const Layout: FCC = ({ children }) => (
  <Fragment>
    <Header />
    <main className={classes.main}>{children}</main>
  </Fragment>
);
