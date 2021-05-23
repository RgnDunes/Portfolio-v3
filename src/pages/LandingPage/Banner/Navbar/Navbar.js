import React from "react";

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
        <NavbarOption icon="🏚" text="Home" />
        <NavbarOption icon="📂" text="Projects" />
        <NavbarOption icon="❉" text="Hobbies" />
        <NavbarOption icon="☎️ " text="Reach++" />
        <NavbarOption icon="" text="" />
      </div>
    </div>
  );
};

export default Navbar;
