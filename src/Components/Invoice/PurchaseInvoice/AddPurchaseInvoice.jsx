import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import {
  createInvoice,
  updateInvoice,
} from "../../../services/InvoiceServices";
import ItemList from "./ItemList";
import { useUser } from "../../../Context/userContext";
import { useLocation, useParams } from "react-router-dom";
import EditBox from "../EditBox";
import Button from "react-bootstrap/esm/Button";

export default function AddPurchaseInvoice() {
  const { user } = useUser();
  const { id } = useParams();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEdit, setEdit] = useState(true);
  const [invoice, setInvoice] = useState({
    partyId: "",
    type: "purchase",
    total: 0,
    invoiceNumber: 0,
    date: "",
  });
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

  useEffect(() => {
    if (location.state && location.state.invoice) {
      const { date, type, invoiceNumber, total, party, itemIds } =
        location.state?.invoice;

      setInvoice({
        date,
        type,
        invoiceNumber,
        total,
        partyId: party._id,
      });

      setitemlist(itemIds);
      if (id) setEdit(false);
    }
  }, [location.state]);

  const handleTotalAmount = (addAmount, prevTotal = invoice.total) => {
    console.log("total add", addAmount);
    setInvoice({
      ...invoice,
      total: prevTotal + addAmount,
    });
  };

  const handleChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createInvoice(invoice, itemlist, user?.id);
      setLoading(false);
      window.location = "/purchase/";
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

  const handleUpdateInvoice = async (e) => {
    try {
      const updated = await updateInvoice(
        location.state.invoice._id,
        user.id,
        itemlist,
        invoice
      );
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return ReactDom.createPortal(
    <div className="invoice">
      <div>
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        {id && !isEdit ? (
          <EditBox
            id={location.state.invoice?._id}
            setEdit={setEdit}
            title={"Purchase Invoice#"}
            name={invoice?.invoiceNumber}
          />
        ) : (
          <></>
        )}
        <ItemList
          isEdit={isEdit}
          itemlist={itemlist}
          invoice={invoice}
          handleTotalAmount={handleTotalAmount}
          setitemlist={setitemlist}
          handleInvoice={handleChange}
        />
        <Button
          className={`btn ${
            !isEdit ? "btn--disable" : "btn--secondary"
          } fs-3 px-4`}
          onClick={id ? handleUpdateInvoice : handleInvoice}
          disabled={!isEdit}
        >
          {id ? "Update Invoice" : "Create Invoice"}
        </Button>
      </div>
    </div>,
    document.getElementById("invoice")
  );
}
