import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles({
  header: {
    padding: "10px 0",
    background: "#2e2d2e",
    
  },
});
const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <header>
        <Container>
          <ul>
            <li>
              <NavLink>home</NavLink>
            </li>
          </ul>
        </Container>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
