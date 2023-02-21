import React from "react";
import Logo from "../../ui/Logo/Logo";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <span>Создано 2021</span>
    </footer>
  );
}

export default Footer;
