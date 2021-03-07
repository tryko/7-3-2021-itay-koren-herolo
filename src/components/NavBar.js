import React from "react";
import { useLocation, Link } from "react-router-dom";

const NavBar = () => {
  const currLocation = useLocation();
  return (
    <div>
      <Link to="/list">List</Link>
      <span> </span>
      <Link to="/recived">Recived</Link>
    </div>
  );
};

export default NavBar;
