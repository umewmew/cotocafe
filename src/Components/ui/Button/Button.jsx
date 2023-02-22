import React from "react";
import styles from "./Button.module.scss";

function Button({ children, minWidth }) {
  return (
    <a href="#">
      <button className={styles.button} type="button" style={{ minWidth: minWidth }}>
        {children}
      </button>
    </a>
  );
}

export default Button;
