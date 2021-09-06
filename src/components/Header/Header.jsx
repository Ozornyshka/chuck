import React from "react";
import { useState, useEffect } from "react";
import { BurgerShow } from "../../App";
import style from "./style.module.css";

const Header = () => {
  return (
    <header style={{ textAlign: "left" }}>
      MSI 2020
      <div className={style.burgerMenu} onClick={BurgerShow}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="14" cy="14" r="14" fill="#333333" />
          <rect x="7" y="16" width="14" height="2" rx="1" fill="white" />
          <rect x="7" y="10" width="14" height="2" rx="1" fill="white" />
        </svg>
        <span>Favourite</span>
      </div>
    </header>
  );
};

export default Header;
