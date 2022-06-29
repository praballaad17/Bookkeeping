import ReactDom from "react-dom";
import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import General from "./General";
import Management from "./Management";
import Item from "./Item";
// import SettingParty from "./setPrint";
import Taxes from "./Taxes";
import Transaction from "./Transaction";
import TransactionMessage from "./TransactionMessage";
import Partiii from "./Partiii";
import Priiint from "./Priiint";
// import SettingParty from "./setParty";



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
        <Routes>
          <Route path="/item" element={<Item/>} />
        </Routes>
        <Routes>
          <Route path="/management" element={<Management/>} />
        </Routes>
        <Routes>
          <Route path="/partiii" element={<Partiii/>} />
        </Routes>
        <Routes>
          <Route path="/priiint" element={<Priiint/>} />
        </Routes>
        <Routes>
          <Route path="/taxes" element={<Taxes/>} />
        </Routes>
        <Routes>
          <Route path="/transaction" element={<Transaction/>} />
        </Routes>
        <Routes>
          <Route path="/transactionmessage" element={<TransactionMessage/>} />
        </Routes>
        

      </div>
    </div>,
    document.getElementById("setting")
  );
}
