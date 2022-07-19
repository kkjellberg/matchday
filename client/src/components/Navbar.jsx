import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/">
            <button className="nav-btn">Teamsheet</button>
        </a>
        <a href="/report">
            <button className="nav-btn">Report</button>
        </a>
        <a href="/archive">
            <button className="nav-btn">Archive</button>
        </a>
      </nav>
    )
  }
}