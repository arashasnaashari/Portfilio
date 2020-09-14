import React from "react";
import "../style/home.css";
import Sidebar from "../Sidebar";
export default function container() {
  return (
    <div className="home">
      <Sidebar />
      <div className="container">
        <div className="container_poem">
          <p>
            HELLO <br />{" "}
            <span>
              I'm <span className="a_name">A</span>R
              <span className="a_name">A</span>SH
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
