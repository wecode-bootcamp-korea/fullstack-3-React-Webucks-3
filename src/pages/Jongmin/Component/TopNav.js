import React from "react";
import "./TopNav.scss";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <>
      <nav>
        <div id="logo">
          <Link to="/" id="logoGoHome">
            WeBucks
          </Link>
        </div>
        <div id="menu">
          <a className="menuClass" href="##">
            COFFEE
          </a>
          <a className="menuClass" href="##">
            MENU
          </a>
          <a className="menuClass" href="##">
            STORE
          </a>
          <a className="menuClass" href="##">
            WHAT'S NEW
          </a>
        </div>
      </nav>
    </>
  );
}

export default TopNav;
