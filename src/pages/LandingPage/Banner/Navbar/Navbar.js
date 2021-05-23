import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../../../assets/images/logo/logoRemoveBg.png";
import NavbarOption from "../../../../components/NavbarOption/NavbarOption";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar__navItems">
        <Link to="/">
          <NavbarOption icon="🏚" text="Home" />
        </Link>
        <Link to="/projects">
          <NavbarOption icon="📂" text="Projects" />
        </Link>
        <Link to="/hobbies">
          <NavbarOption icon="❉" text="Hobbies" />
        </Link>
        <NavbarOption icon="☎️ " text="Reach++" />
        <NavbarOption icon="" text="" />
      </div>
    </div>
  );
};

export default Navbar;
