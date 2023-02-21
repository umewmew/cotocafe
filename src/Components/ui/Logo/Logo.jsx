import React from "react";
import { logo } from "../../../Assets/icons";

function Logo({ children }) {
  return (
    <a href="../index.js">
      {logo}
      <span>{children}</span>
    </a>
  );
}

export default Logo;
