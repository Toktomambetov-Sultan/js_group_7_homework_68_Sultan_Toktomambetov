import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import LayoutLink from "./LayoutLink/LayoutLink";
const useStyles = makeStyles({
  header: {
    padding: "10px 0",
    background: "#2e2d2e",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "22px",
    "&.active": {
      color: "#91f57f",
    },
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <header className={classes.header}>
        <Container>
          <ul className={classes.ul}>
            <LayoutLink to="/counter">Counter</LayoutLink>
            <LayoutLink to="/todoApp">Todo app</LayoutLink>
          </ul>
        </Container>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
