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
import { useInvoice } from "../../../Context/invoiceContext";

export default function AddPurchaseInvoice() {
  const { user, addToast } = useUser();
  const { addInvoice, itemlist, addItemList, invoice } = useInvoice();
  const { id } = useParams();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
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
      addInvoice("purchase");
      addItemList();
    }
  }, [location.state]);

  const handleInvoice = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      console.log(invoice, itemlist);
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
