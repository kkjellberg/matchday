import React from "react";
import "./navbar.css";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <a href="/">
            <p>Teamsheet</p>
        </a>
        <a href="/report">
            <p>Match Report</p>
        </a>
        <a href="/archive">
            <p>Archive</p>
        </a>
      </nav>
    )
  }
}