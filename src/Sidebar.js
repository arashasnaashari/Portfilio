import React from "react";
import "./style/sidebar.css";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <React.Fragment>
      <div className="sidebar_container">
        <div className="left">
          <div className="logo_part">
            <img src="./logo.png" alt="" width="80" />
          </div>
          <div className="link_part">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/project">PROJECT</Link>
            <Link to="/chalenge">CHALENGE</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
          <div className="lang_part">
            <button>fa</button>
          </div>
        </div>
        <button className="right">&#9776;</button>
      </div>
    </React.Fragment>
  );
}
