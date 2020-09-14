import React from "react";
import { makeStyles } from "@material-ui/styles";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles({
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "22px",
    "&.active": {
      color: "#91f57f",
    },
  },
});
const LayoutLink = ({ to, children }) => {
  const classes = useStyles();
  return (
    <li>
      <NavLink to={to} className={classes.link} exact>
        {children}
      </NavLink>
    </li>
  );
};

export default LayoutLink;
