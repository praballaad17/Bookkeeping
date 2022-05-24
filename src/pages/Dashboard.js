import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import DetailsModal from "../Components/DetailsModal";
import Sidebar from "../Components/Sidebar/Sidebar";
import Uppernavbar from "../Components/Uppernavbar";
import * as ROUTES from "../constants/routes";
import "../css/dashboardStyle.css";
import Item from "../Components/Item";
import AddItem from "../Components/AddItem";
import ImportItem from "../Components/Utilities/ImportItem";
import PurchaseInvoice from "../Components/Invoice/PurchaseInvoice";
import AddPurchaseInvoice from "../Components/Invoice/AddPurchaseInvoice";
import SalesInvoice from "../Components/Invoice/SalesInvoice";
import AddSalesInvoice from "../Components/Invoice/AddSalesInvoice";
export default function Dashboard({ user: loggedInUser }) {
  const [open, setOpen] = useState(false);

  // if (!loggedInUser) return <Navigate to={`/authentication${ROUTES.LOGIN}`} />

  return (
    <div className="dashboard-mian">
      <div id="top-div">
        <Uppernavbar />
      </div>
      <div id="bottom-div">
        <div id="sidebar-div">
          <Sidebar
            open={open}
            onClose={() => {
              setOpen(true);
            }}
          />
        </div>

        <div id="central-div">
          <DetailsModal open={open} onClose={() => setOpen(false)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/item" element={<Item />} />
            <Route path="/item/add" element={<AddItem />} />
            <Route path="/purchase" element={<PurchaseInvoice />} />
            <Route path="/purchase/add" element={<AddPurchaseInvoice />} />
            <Route path="/sales" element={<SalesInvoice />} />
            <Route path="/sales/add" element={<AddSalesInvoice />} />
            <Route path="/utilities/import/item" element={<ImportItem />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
