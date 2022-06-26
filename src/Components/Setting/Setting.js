import ReactDom from "react-dom";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import General from "./General";


export default function Setting() {
  const [Setting, setSetting] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);
  return ReactDom.createPortal(
    <div className="setting ">
      <SideBar />
      <div className="setting__main">
        <Routes>
          <Route path="/general" element={<General />} />
        </Routes>

      </div>
    </div>,
    document.getElementById("setting")
  );
}
