import React from "react";
import { Icon } from "@mui/material";
import { LocationOn, Phone, Email } from "@mui/icons-material";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-item">
        <Icon>
          <LocationOn />
        </Icon>
        <span>Rezilla, 18 Grattan St, Brooklyn </span>
      </div>

      <div className="header-item header-phone">
        <Icon>
          <Phone />
        </Icon>
        <span>+1 206-214-229 </span>
      </div>

      <div className="header-item header-em">
        <Icon>
          <Email />
        </Icon>
        <span>support@rezilla.com </span>
      </div>
    </div>
  );
};

export default Header;
