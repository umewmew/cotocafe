import React from "react";
import styles from "./TitleSize.module.scss";
import clsx from "clsx";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: "",
};

function Title({ children, size }) {
  return (
    <h1 className={clsx(styles.title, styles[`title_${size}`])}>{children}</h1>
  );
}

export default Title;