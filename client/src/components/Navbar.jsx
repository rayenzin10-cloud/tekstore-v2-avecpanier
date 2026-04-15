import React from "react";
import Search from "./Search";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="logo">
        TEK STORE
      </NavLink>
      <Search />
      <NavLink to="/addproduct" className="add">
        Add Product
      </NavLink>

      <NavLink to="/cart">cart</NavLink>
    </div>
  );
};

export default Navbar;
