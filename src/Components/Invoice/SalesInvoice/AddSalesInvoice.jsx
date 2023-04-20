import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { useLocation, useParams } from "react-router-dom";
import { SALESINV } from "../../../constants/routes";
import { useUser } from "../../../Context/userContext";
import {
  createInvoice,
  updateInvoice,
} from "../../../services/InvoiceServices";
import EditBox from "../EditBox";
import ItemList from "./ItemListSales";
import Button from "react-bootstrap/esm/Button";
import { useInvoice } from "../../../Context/invoiceContext";

export default function AddSalesInvoice() {
  const { user, addToast, setLoading } = useUser();
  const { addInvoice, itemlist, addItemList, invoice } = useInvoice();
  const { id } = useParams();
  const location = useLocation();

  const [isEdit, setEdit] = useState(true);

  useEffect(() => {
    if (location.state && location.state.invoice) {
      const { date, type, invoiceNumber, total, party, itemIds } =
        location.state?.invoice;
      const newItemIds = itemIds.map((item) => {
        return {
          ...item,
          ...item.itemId,
          _id: item._id,
          itemId: item.itemId._id,
        };
      });

      addInvoice(type, {
        date,
        invoiceNumber,
        total,
        partyId: party._id,
      });

      addItemList(newItemIds);
      if (id) setEdit(false);
    } else {
      addInvoice("sales");
      addItemList();
    }
  }, [location.state]);

  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await createInvoice(invoice, itemlist, user?.id);
      setLoading(false);
      window.location = SALESINV;
    } catch (error) {
      addToast("error: cannot add sales invoice", true);
      setLoading(false);
    }
  };

  const handleUpdateInvoice = async (e) => {
    setLoading(true);
    try {
      const updated = await updateInvoice(
        location.state.invoice._id,
        user.id,
        itemlist,
        invoice
      );
      setLoading(false);
      setEdit(false);
    } catch (error) {
      addToast(error.message, true);
      setLoading(false);
    }
  };

  return ReactDom.createPortal(
    <div className="invoice">
      <div>
        {id && !isEdit ? (
          <EditBox
            id={location.state.invoice?._id}
            setEdit={setEdit}
            title={"Sales Invoice#"}
            name={invoice?.invoiceNumber}
          />
        ) : (
          <></>
        )}
        {/* <input name="invoiceID" value={invoiceID} onChange={(e) => handleChange(e)} /> */}
        <ItemList isEdit={isEdit} />
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
