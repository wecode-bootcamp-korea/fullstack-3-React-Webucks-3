import React from "react";
import { Link } from "react-router-dom";
import "./CommonPage.css";

function CommonPage() {
  return (
    <div className="team3Pages">
      <Link to="/login-haneul" className="hnPage">
        <button id="login-button" type="submit">
          Haneul
        </button>
      </Link>
      <Link to="/login-heeyun" className="hyPage">
        <button id="login-button" type="submit">
          Heeyun
        </button>
      </Link>
      <Link to="/login-jongmin" className="jmPage">
        <button id="login-button" type="submit">
          Jongmin
        </button>
      </Link>
      <Link to="/login-mingi" className="mgPage">
        <button id="login-button" type="submit">
          Mingi
        </button>
      </Link>
      <Link to="/login-younguk" className="yuPage">
        <button id="login-button" type="submit">
          Younguk
        </button>
      </Link>
    </div>
  );
}

export default CommonPage;
