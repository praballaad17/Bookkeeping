import React, { useState } from "react";
import ReactDom from "react-dom";
import { createInvoice } from "../../../services/InvoiceServices";
import ItemList from "./ItemList";
import { useUser } from "../../../Context/userContext"

export default function AddPurchaseInvoice() {
  const { user } = useUser()
  // const { id } = useParams()
  // const location = useLocation()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEdit, setEdit] = useState(true)
  const [invoice, setInvoice] = useState({
    partyId: "",
    type: "purchase",
    total: 0,
    invoiceNumber: 0,
    date: ""
  })
  const [itemlist, setitemlist] = useState([
    {
      name: "",
      itemCategory: "",
      itemCode: "",
      decription: "",
      discount: "",
      lowStockDialog: "",
      openigStockQuantity: "",
      purchasePrice: "",
      salePrice: "",
      itemWiseTax: "",
      taxamount: "",
      inclusionTax: "",
      unit: ""
    },
  ]);

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
      await createInvoice(invoice, itemlist, user?.id);
      setLoading(false);
      window.location = "/dashboard/purchase/";
    } catch (error) {
      setitemlist([
        {
          name: "",
          itemCategory: "",
          itemCode: "",
          decription: "",
          discount: "",
          lowStockDialog: "",
          openigStockQuantity: "",
          purchasePrice: "",
          salePrice: "",
          itemWiseTax: "",
          taxamount: "",
          inclusionTax: "",
          unit: ""
        },
      ]);
      setError(error.message);
      setLoading(false);
    }
  }

  console.log(invoice);

  return ReactDom.createPortal(
    <div className="invoice">
      <div >
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        <ItemList itemlist={itemlist} invoice={invoice} handleTotalAmount={handleTotalAmount} setitemlist={setitemlist} handleInvoice={handleChange} />
        <button className="btn btn--secondary"
          onClick={handleInvoice}
        >
          Create Invoice
        </button>
      </div>
    </div>,
    document.getElementById("invoice")
  );
}
