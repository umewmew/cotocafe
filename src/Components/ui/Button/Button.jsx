import React from "react";
import "./Button.module.css";

function Button({ children, minWidth }) {
  return (
    <a href="#">
      <button className="button" type="button" style={{ minWidth: minWidth }}>
        {children}
      </button>
    </a>
  );
}

export default Button;
