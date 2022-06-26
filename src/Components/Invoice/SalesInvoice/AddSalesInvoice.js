// import React from 'react'

// export default function AddSalesInvoice() {
//     return (
//         <div>AddSalesInvoice</div>
//     )
// }


import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useLocation, useParams } from "react-router-dom";
import { useUser } from "../../../Context/userContext";
import { createInvoice, updateInvoice } from "../../../services/InvoiceServices";
import EditBox from "../EditBox";
import ItemList from "./ItemListSales";
// import ItemList from "./ItemList";


export default function AddSalesInvoice() {
  const { user } = useUser()
  const { id } = useParams()
  const location = useLocation()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEdit, setEdit] = useState(true)
  const [invoice, setInvoice] = useState({
    partyId: "",
    type: "sales",
    total: 0,
    invoiceNumber: 0,
    date: ""
  })
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

  useEffect(() => {
    if (location.state && location.state.invoice) {

      const { date, type, invoiceNumber, total, party, itemIds } = location.state?.invoice

      setInvoice({
        date, type, invoiceNumber, total, partyId: party._id
      })

      setitemlist(itemIds)
      if (id)
        setEdit(false)
    }
  }, [location.state])



  const handleTotalAmount = (addAmount, prevTotal = invoice.total) => {
    console.log("total add", addAmount);
    setInvoice({
      ...invoice,
      total: prevTotal + addAmount
    });
  };

  const handleChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value
    });
  }
  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await createInvoice(invoice, itemlist, user?.id);
      setLoading(false);
      window.location = "/dashboard/sales/";
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

  const handleUpdateInvoice = async (e) => {
    try {
      console.log("update", invoice, itemlist);
      const updated = await updateInvoice(location.state.invoice._id, user.id, itemlist, invoice)
      setEdit(false)
      console.log(updated);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("invoice", invoice);


  return ReactDom.createPortal(
    <div className="invoice">
      <div >
        {id && !isEdit ? <EditBox id={location.state.invoice?._id} setEdit={setEdit} title={"Sales Invoice#"} name={invoice?.invoiceNumber} /> : <></>}
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        <ItemList isEdit={isEdit} itemlist={itemlist} invoice={invoice} handleTotalAmount={handleTotalAmount} setitemlist={setitemlist} handleInvoice={handleChange} />
        <button className={`btn ${!isEdit ? "btn--disable" : "btn--secondary"}`}
          onClick={id ? handleUpdateInvoice : handleInvoice}
          disabled={!isEdit}
        >
          {id ? "Update Invoice" : "Create Invoice"}
        </button>
      </div>
    </div>,
    document.getElementById("invoice")
  );
}
