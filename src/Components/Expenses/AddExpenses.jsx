import React, { useState } from "react";
import ReactDom from "react-dom";
import { createInvoice } from "../../services/InvoiceServices";
import ItemList from "./ItemListExpenses";
import { useUser } from "../../Context/userContext";
import * as VARIABLE from "../../constants/variables";

export default function AddExpenses() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invoiceID, setinvoiceID] = useState("");
  const [total, setTotal] = useState(0);
  const { user } = useUser();

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
      unit: "",
    },
  ]);

  const handleChange = (e) => {
    setinvoiceID(([e.target.name] = e.target.value));
  };
  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createInvoice(
        itemlist,
        user?.id,
        VARIABLE.INVOICETYPE.PURCHASE,
        total
      );
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
          unit: "",
        },
      ]);
      setError(error.message);
      setLoading(false);
    }
  };
  return ReactDom.createPortal(
    <div className="invoice">
      <div>
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        <ItemList
          itemlist={itemlist}
          setitemlist={setitemlist}
          total={total}
          setTotal={setTotal}
        />
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
