import React, { useContext, useState, useEffect, createContext } from "react";
import { getPartyByUserId } from "../services/partyServices";
import { getItemsByUserId } from "../services/ItemServices";
import { INVOICETYPE } from "../constants/variables";
import { getInvoiceUserId } from "../services/InvoiceServices";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}
export function DataProvider({ user, children }) {
  const [parties, setParties] = useState([]);
  const [items, setItems] = useState([]);
  const [salesInvoice, setSalesInvoice] = useState([]);
  const [purchaseInvoice, setPurchaseInvoice] = useState([]);

  const getParties = async () => {
    const parties = await getPartyByUserId(user?.id, "all");
    setParties(parties);
  };

  const addLocalItem = async (item) => {
    setItems([...items, item]);
  };

  const getItems = async () => {
    const items = await getItemsByUserId(user?.id, 30, 1);
    setItems(items);
  };

  const getSalesInvoice = async () => {
    const salesInvoice = await await getInvoiceUserId(
      INVOICETYPE.SALES,
      user?.id
    );
    setSalesInvoice(salesInvoice);
  };

  const getPurchaseInvoice = async () => {
    const purchaseInvoice = await await getInvoiceUserId(
      INVOICETYPE.PURCHASE,
      user?.id
    );
    setPurchaseInvoice(purchaseInvoice);
  };

  const value = {
    getParties,
    parties,
    items,
    getItems,
    getSalesInvoice,
    salesInvoice,
    purchaseInvoice,
    getPurchaseInvoice,
    addLocalItem,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
