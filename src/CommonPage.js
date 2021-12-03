import React from "react";
import { Link } from "react-router-dom";
import "./CommonPage.css";

function CommonPage() {
  return (
    <>
      <Link to="/login-haneul" className="team3Pages">
        <button id="login-button" type="submit">
          하늘's 웹페이지
        </button>
      </Link>
      <Link to="/login-heeyun" className="team3Pages">
        <button id="login-button" type="submit">
          희윤's 웹페이지
        </button>
      </Link>
      <Link to="/login-jongmin" className="team3Pages">
        <button id="login-button" type="submit">
          종민's 웹페이지
        </button>
      </Link>
      <Link to="/login-mingi" className="team3Pages">
        <button id="login-button" type="submit">
          민기's 웹페이지
        </button>
      </Link>
      <Link to="/login-younguk" className="team3Pages">
        <button id="login-button" type="submit">
          영욱's 웹페이지
        </button>
      </Link>
    </>
  );
}

export default CommonPage;
