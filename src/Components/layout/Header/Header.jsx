import React from "react";
import Logo from "../../ui/Logo/Logo.jsx";
import Nav from "../Nav/Nav.jsx";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
