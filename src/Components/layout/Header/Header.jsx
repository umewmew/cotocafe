import React from "react";
import Logo from "../../ui/Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import "./Header.module.css";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
