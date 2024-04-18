import React from "react";
import { Icon } from "@mui/material";
import { Home, AccountCircle, Add } from "@mui/icons-material";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <span>Home</span>
      </div>

      <div className="navbar-item">
        <span>About</span>
      </div>

      <div className="navbar-item">
        <span>Listings</span>
      </div>

      <div className="navbar-item">
        <span>Services</span>
      </div>

      <div className="navbar-item">
        <span>Blogs</span>
      </div>

      <div className="nav-itm-center">
        <Icon className="nav-icon">
          <Home />
        </Icon>
        <span>Rezilla</span>
      </div>

      <div className="nav-itm-right">
        <Icon className="nav-icon">
          <AccountCircle />
        </Icon>
        <span>Login/Register</span>
        <Icon className="nav-addlist nav-icon">
          <Home />
        </Icon>
        <span>Add Listing</span>
      </div>
    </div>
  );
};

export default Navbar;
