import React, { useState } from "react";
import ReactDom from "react-dom";
import { createInvoice } from "../../services/InvoiceServices";
import ItemList from "./ItemList";


export default function AddPurchaseInvoice() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invoiceID, setinvoiceID] = useState("")
  const [itemlist, setitemlist] = useState([
    {
      item: "",
      itemCategory: "",
      itemCode: "",
      decription: "",
      discount: "",
      quantity: "",
      unit: "",
      pricePerUnit: "",
      taxPercent: "",
      taxamount: "",
      amount: "",
    },
  ]);

  const handleChange = (e) => {
    setinvoiceID([e.target.name] = e.target.value);
  }
  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createInvoice(invoiceID, itemlist);
      setLoading(false);
      window.location = "/dashboard/purchase/";
    } catch (error) {
      setitemlist([
        {
          item: "",
          itemCategory: "",
          itemCode: "",
          decription: "",
          discount: "",
          quantity: "",
          unit: "",
          pricePerUnit: "",
          taxPercent: "",
          taxamount: "",
          amount: "",
        },
      ]);
      setError(error.message);
      setLoading(false);
    }
  }
  return ReactDom.createPortal(
    <div className="invoice">
      <div >
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        <ItemList itemlist={itemlist} setitemlist={setitemlist} />
        {/* <button className="btn btn--secondary"
          onClick={handleInvoice}
        >
          Create Invoice
        </button> */}
      </div>
    </div>,
    document.getElementById("invoice")
  );
}
