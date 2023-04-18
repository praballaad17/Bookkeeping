import React, { useContext, useState, useEffect, createContext } from "react";
import { EMPTYINVOICE, EMPTYITEM } from "../constants/variables";

const InvoiceContext = createContext();

export function useInvoice() {
  return useContext(InvoiceContext);
}
export function InvoiceProvider({ children }) {
  const [invoice, setInvoice] = useState(EMPTYINVOICE);

  const [itemlist, setitemlist] = useState([EMPTYITEM]);

  const addInvoice = (type, paramInvoice = EMPTYINVOICE) => {
    setInvoice({
      ...paramInvoice,
      type: type,
    });
  };

  const addItemList = (list = [EMPTYITEM]) => {
    setitemlist(list);
  };

  const setItemListWithItemId = (item, index) => {
    let list = [...itemlist];

    list[index] = {
      ...item,
    };
    getTotal(list);
    setitemlist(list);
  };

  const getTotal = (list = itemlist, type = invoice.type) => {
    let sum = 0.0;
    list.map((item) => {
      const price = type === "sales" ? item.salePrice : item.purchasePrice;
      sum +=
        parseFloat(item.unit * price) +
        (parseInt(item.itemWiseTax) * parseInt(price) * item.unit) / 100;
    });

    setInvoice({
      ...invoice,
      total: sum,
    });

    return sum;
  };

  const editInvoice = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const editItemList = (e, index) => {
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;

    list[index].isEdited = true;

    getTotal();
    console.log(list);
    setitemlist(list);
  };

  const AddEmptyItem = (list = itemlist) => {
    console.log("clicked function", list, itemlist);
    setitemlist([...list, EMPTYITEM]);
  };

  const handleItemRemove = (index) => {
    const list = [...itemlist];

    const itemAmount = list[index]["itemAmount"];
    list.splice(index, 1);
    setitemlist(list);
    console.log(list.length);
    if (list.length == 0) {
      handleItemAdd(list);
    }
  };

  const setItemToList = (item, index) => {
    let list = [...itemlist];

    console.log(item);

    list[index] = {
      ...item,
      itemId: item._id,
      _id: list[index]._id ? list[index]._id : item._id,
      unit: "1",
      isEdited: true,
    };
    getTotal(list);
    setitemlist(list);
    AddEmptyItem(list);
  };

  console.log(itemlist);

  const value = {
    invoice,
    addInvoice,
    itemlist,
    getTotal,
    editInvoice,
    editItemList,
    AddEmptyItem,
    handleItemRemove,
    setItemToList,
    addItemList,
    setItemListWithItemId,
  };

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
}
