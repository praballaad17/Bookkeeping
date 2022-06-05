import React from "react";
import '../css/Uppernavstyle.css'

const Uppernavbar = () => {
  return (
    <div className="topnav">
      <a className="topnav-links" href="#company">Company</a>
      <a className="topnav-links" href="#help">Help</a>
      <a className="topnav-links" href="#shortcuts">Shortcuts</a>
    </div>
  );
};

export default Uppernavbar;
