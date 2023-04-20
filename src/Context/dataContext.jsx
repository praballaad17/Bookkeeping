import React, { useContext, useState, useEffect, createContext } from "react";
import { getPartyByUserId } from "../services/partyServices";
import { getItemsByUserId } from "../services/ItemServices";
import { INVOICETYPE } from "../constants/variables";
import { getInvoiceUserId } from "../services/InvoiceServices";
import { useUser } from "./userContext";

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}
export function DataProvider({ user, children }) {
  const { setLoading } = useUser();
  const [parties, setParties] = useState([]);
  const [items, setItems] = useState([]);
  const [salesInvoice, setSalesInvoice] = useState([]);
  const [purchaseInvoice, setPurchaseInvoice] = useState([]);

  const getParties = async () => {
    setLoading(true);
    if (parties.length) {
      setLoading(false);
      return;
    }
    const resparties = await getPartyByUserId(user?.id, "all");
    setParties(resparties);
    setLoading(false);
  };

  const addLocalItem = async (item) => {
    setItems([...items, item]);
  };

  const getItems = async () => {
    setLoading(true);
    console.log(items);
    if (items.length) {
      setLoading(false);
      return;
    }
    const resitems = await getItemsByUserId(user?.id, 30, 1);
    setItems(resitems);
    setLoading(false);
  };

  const getSalesInvoice = async () => {
    setLoading(true);
    if (salesInvoice.length) {
      setLoading(false);
      return;
    }
    const ressalesInvoice = await getInvoiceUserId(INVOICETYPE.SALES, user?.id);
    setSalesInvoice(ressalesInvoice);
    setLoading(false);
  };

  const getPurchaseInvoice = async () => {
    setLoading(true);
    if (purchaseInvoice.length) {
      setLoading(false);
      return;
    }
    const respurchaseInvoice = await await getInvoiceUserId(
      INVOICETYPE.PURCHASE,
      user?.id
    );
    setPurchaseInvoice(respurchaseInvoice);
    setLoading(false);
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
