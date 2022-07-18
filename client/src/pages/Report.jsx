import React from "react";
import "./report.css";
import NewReport from "../adapters/postReport";
import Navbar from "../components/Navbar";

export default class Report extends React.Component {
  render(){
    return(
      <div>
        <Navbar/>
        <NewReport />
      </div>
    )
  }
}