import React, { useContext, useState, useEffect, createContext } from "react";
import { getB2BInvoice } from "../services/gstServices";
import { useUser } from "./userContext";

const GSTContext = createContext();

export function useGST() {
  return useContext(GSTContext);
}
export function GSTProvider({ user, children }) {
  const { addToast } = useUser();
  const [allInvoice, setAllInvice] = useState([]);
  const [b2bInvoice, setb2bInvoice] = useState([]);
  const [b2cInvoice, setb2cInvoice] = useState([]);

  const getInvoice = async () => {
    try {
      const data = await getB2BInvoice(user.id);
      // setAllInvice(data);
      processItemDataToFormate(data);
      // sepreateInvoice(data);
      return data;
    } catch (error) {
      addToast(`error: ${error?.message}`, true);
      console.log(error);
    }
  };

  const processItemDataToFormate = (invoices = allInvoice) => {
    let formatedInvoices = [];

    invoices.map((invoice) => {
      let tempItemIds = invoice.itemIds;

      tempItemIds.sort((a, b) =>
        a.itemId.itemWiseTax > b.itemId.itemWiseTax
          ? -1
          : b.itemId.itemWiseTax > a.itemId.itemWiseTax
          ? 1
          : 0
      );

      delete invoice.itemIds;
      tempItemIds.map((item) => {
        formatedInvoices.push({
          ...invoice,
          unit: item.unit,
          rate: item.itemId.itemWiseTax,
          salePrice: item.itemId.salePrice,
          purchasePrice: item.itemId.purchasePrice,
        });
      });
    });

    setAllInvice(formatedInvoices);
    sepreateInvoice(formatedInvoices);
  };

  const sepreateInvoice = (invoices = allInvoice) => {
    let b2b = [];
    let b2c = [];

    invoices.map((item) => {
      if (item.party.gstType === "registered") {
        b2b.push(item);
      } else {
        b2c.push(item);
      }
    });

    setb2bInvoice(b2b);
    setb2cInvoice(b2c);

    return { b2b, b2c };
  };

  const value = {
    allInvoice,
    b2bInvoice,
    b2cInvoice,
    getInvoice,
    sepreateInvoice,
  };

  return <GSTContext.Provider value={value}>{children}</GSTContext.Provider>;
}
