import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
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
            <li>
              <NavLink to="/counter" className={classes.link} exact>
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/todoApp" className={classes.link} exact>
                Todo app
              </NavLink>
            </li>
          </ul>
        </Container>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
