import React from "react";
import Reports from "../adapters/getReports";
import Navbar from "../components/Navbar";
import "./archive.css";

const Archive = () => {
  return(
    <div className="archive">
      <Navbar/>
      <Reports />
    </div>
  )
};

export default Archive;