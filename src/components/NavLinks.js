import React from "react";
import { NavLink } from "react-router-dom";

/*
 NavLink for navigation placed towards left bottom of Grid
*/

const NavLinks = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: "500",
      fontSize: "1.5rem",
      color: isActive ? "blue" : "black"
    }
  };

  const renderNavLinks = navLink => <div className="routes-container">{navLink}</div>

  return (
    <>
      {renderNavLinks(<NavLink style={navLinkStyles} to="/">Dashboard</NavLink>)}
      {renderNavLinks(<NavLink style={navLinkStyles} to="/blogContent">Blogs</NavLink>)}
    </>
  )
};

export default NavLinks;