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

      <div className="navbar-item">
        <Icon>
          <Home />
        </Icon>
        <span>Rezilla</span>
      </div>

      <div className="navbar-item">
        <Icon>
          <AccountCircle />
        </Icon>
        <span>Login/Register</span>
      </div>

      <div className="navbar-item">
        <Icon>
          <Add />
        </Icon>
        <span>Add Listing</span>
      </div>
    </div>
  );
};

export default Navbar;
