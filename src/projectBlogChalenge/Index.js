import React from "react";
import Sidebar from "../Sidebar";

export default function index(props) {
  return (
    <div className="home">
      <Sidebar />
      <h2>
        This Page Will Be : <h1>{props.name}</h1>
      </h2>
    </div>
  );
}
