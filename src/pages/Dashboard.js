import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import DetailsModal from "../Components/DetailsModal";
import Sidebar from "../Components/Sidebar/Sidebar";
// import Uppernavbar from "../Components/Uppernavbar";
import * as ROUTES from "../constants/routes";
import Item from "../Components/Item/Item";
import AddItem from "../Components/AddItem";
import ImportItem from "../Components/Utilities/ImportItem";
import PurchaseInvoice from "../Components/Invoice/PurchaseInvoice";
import AddPurchaseInvoice from "../Components/Invoice/AddPurchaseInvoice";
import SalesInvoice from "../Components/Invoice/SalesInvoice/SalesInvoice";
import AddSalesInvoice from "../Components/Invoice/SalesInvoice/AddSalesInvoice";
import ItemTable from "../Components/Utilities/ItemTable";
import Parties from "../Components/Parties/Parties";
import AddParties from "../Components/Parties/AddParties";
import Expenses from "../Components/Invoice/Expenses";
import AddExpenses from "../Components/Invoice/AddExpenses";
import Setting from "../Components/Setting/Setting";


export default function Dashboard({ user: loggedInUser }) {
  const [open, setOpen] = useState(false);

  // if (!loggedInUser) return <Navigate to={`/authentication${ROUTES.LOGIN}`} />

  return (
    <div className="dashboard-mian">
      {/* <div id="top-div">
        <Uppernavbar />
      </div> */}
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
            <Route path={ROUTES.ITEM} element={<Item />} />
            <Route path="/item/add" element={<AddItem />} />
            {/* <Route path="/item-table" element={<ItemTable />} />  */}
            <Route path='/purchase' element={<PurchaseInvoice />} />
            <Route path="/purchase/add" element={<AddPurchaseInvoice />} />
            <Route path="/sales" element={<SalesInvoice />} />
            <Route path="/sales/add" element={<AddSalesInvoice />} />
            <Route path="/invoice/sales/open/:id" element={<AddSalesInvoice />} />
            <Route path="/parties" element={<Parties />} />
            <Route path="/parties/add" element={<AddParties />} />
            <Route path="/utilities/import/item" element={<ImportItem />} />
            <Route path="/setting/*" element={<Setting />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/addexpenses" element={<AddExpenses />} />
            <Route path="/dahsboard" element={<Home />} />
            <Route
              path="/"
              element={<Navigate to="/dahsboard" />} replace />
          </Routes>
        </div>
      </div>
    </div>
  );
}
