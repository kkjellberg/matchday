import React from "react";
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import Teamsheet from "./pages/Teamsheet";
import Report from "./pages/Report";
import Archive from "./pages/Archive";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Teamsheet />} />
          <Route path="/report" exact element={<Report />} />
          <Route path="/archive" exact element={<Archive />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
