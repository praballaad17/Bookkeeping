import ReactDom from "react-dom";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Account from "./Account";
import ManageBusiness from "./ManageBusiness";
import InvoiceTheme from "./InvoiceTheme";
import ManageUser from "./ManageUser";
import Reminder from "./Reminder";



export default function Setting() {
  const [Setting, setSetting] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);
  return ReactDom.createPortal(
    <div className="setting ">
      <SideBar />
      <div className="setting__main">
        <Routes>
          <Route path="/account" element={<Account/>} />

          <Route path="/managebusiness" element={<ManageBusiness/>} />

          <Route path="/invoicetheme" element={<InvoiceTheme/>} />

          <Route path="/manageuser" element={<ManageUser/>} />

          <Route path="/reminder" element={<Reminder/>} />
          <Route
            path="/"
            element={<Navigate to="/setting/general" />} replace />
        </Routes>

      </div>
    </div>,
    document.getElementById("setting")
  );
}
