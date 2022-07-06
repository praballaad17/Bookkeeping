import React, { useEffect, useState } from "react";
import { searchItem } from "../../../services/ItemServices";
import ItemSearchBox from "../ItemSearchBox";
import { useUser } from "../../../Context/userContext"
import { getPartyByUserId } from "../../../services/partyServices";
import DeleteModal from "./DeleteModal";

export default function ItemList({ isEdit, itemlist, invoice, setitemlist, handleInvoice, handleTotalAmount }) {
  const { user } = useUser()
  const [index, setIndex] = useState(null);
  // const [row,setRow] = useState()
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);

  const [customers, setCustumers] = useState([])

  console.log(itemlist);
  useEffect(() => {
    const getCustumers = async () => {
      try {
        const customers = await getPartyByUserId(user?.id)
        setCustumers(customers)
      } catch (error) {
        console.log(error);
      }
    }
    getCustumers()
  }, [])

  const calculatTaxAmount = (taxPer, price, unit) => {
    return (taxPer * price * unit) / 100;
  };

  const calculatItemAmount = (price, unit, tax) => {
    return price * unit + tax;
  };



  const handleChange = (e, index) => {
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;

    if (e.target.name === "itemWiseTax" || e.target.name === "unit") {
      let taxper = e.target.value;

      list[index]["taxamount"] = calculatTaxAmount(
        parseInt(list[index]["itemWiseTax"].split("@").pop().split("%")[0]),
        parseInt(list[index]["purchasePrice"]),
        list[index]["unit"]
      );
      const previousAmount = list[index]["itemAmount"]
      list[index]["itemAmount"] = calculatItemAmount(
        parseInt(list[index]["purchasePrice"]),
        list[index]["unit"],
        list[index]["taxamount"]
      );
      handleTotalAmount(list[index]["itemAmount"] - previousAmount)
    }
    setitemlist(list);
  };

  const handleSearchQuery = async (e, index) => {
    setOpen(true);
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;
    if (e.target.value === "") {
      setIndex(null);
      setOpen(false);
    } else {
      setIndex(index);
      setitemlist(list);
      const result = await searchItem(e.target.value);
      setResult(result);
    }
  };

  const handleItemAdd = (list = itemlist) => {
    setitemlist([
      ...list,
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
        itemAmount: "",
      },
    ]);
  };

  const setItemInput = (item, index) => {
    let list = [...itemlist];
    const taxamount = calculatTaxAmount(
      parseInt(item["itemWiseTax"].split("@").pop().split("%")[0]),
      parseInt(item["purchasePrice"]),
      1
    );
    const itemAmount = calculatItemAmount(
      parseInt(item["purchasePrice"]),
      1,
      taxamount
    );
    list[index] = {
      ...item,
      unit: "1",
      taxamount: taxamount,
      itemAmount: itemAmount,
    };
    handleTotalAmount(itemAmount);
    setitemlist(list);
    handleItemAdd(list);
  };

  const handleItemRemove = (index) => {
    const list = [...itemlist];

    const itemAmount = list[index]["itemAmount"];
    list.splice(index, 1);
    handleTotalAmount(-itemAmount);
    setitemlist(list);
    console.log(list.length);
    if (list.length == 0) {
      handleItemAdd(list);
    }
  };

  return (
    <div>
      <div className="scrolable">
        <div className="topnavbar">
          <div>
            <span>SALES | </span>
            <span className="creditspan">Credit </span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span className="cashspan"> Cash</span>
          </div>
          <div>
            <i className="fa-solid fa-calculator righticons"></i>
            <i className="fa-solid fa-circle-xmark righticons"></i>
          </div>
        </div>
        <div className="above">
          <div className="abovetable">
            <div className="partyinput ">
              <select readOnly={!isEdit} value={invoice?.partyId ? invoice.partyId : "party"} onChange={(e) => { handleInvoice(e) }} id="types" name="partyId" className="partyinputs">
                <option value="party">Customer *</option>
                {customers && customers.length && customers.map(customer => (
                  <option key={customer?._id} value={customer?._id}>{customer?.name}</option>
                ))
                }
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Invoice Number : </label>
              <input readOnly={!isEdit} value={invoice?.invoiceNumber} onChange={(e) => handleInvoice(e)} type="text" id="invoiceNumber" name="invoiceNumber" />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone No."
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
                readOnly={!isEdit}
              />
            </div>

            <div>
              <label htmlFor="billdate" className="inputbox">
                {" "}
                Invoice Date :{" "}
              </label>
              <input readOnly={!isEdit} defaultValue={invoice?.date} type="date" id="billdate" name="date" onChange={e => handleInvoice(e)} />
            </div>
          </div>
        </div>
        <table className="item__table">
          <thead>
            <tr className="item-heading">
              <th className="title-item--index">#</th>
              <th className="title-item title">Item</th>
              <th className="title">Item Code</th>
              <th className="title">Quantity</th>
              <th className="title">Unit</th>
              <th className="title-ppu title">
                <div>Price</div>
                <select className="title-ppu--select">
                  <option>Without Tax</option>
                  <option>With Tax</option>
                </select>
              </th>
              <th colspan="2" className="title title--tax">
                <div className="title--tax__top">Tax</div>
                <div className="title--tax__foot">
                  <div className="title--tax__foot--left">%</div>
                  <div className="title--tax__foot--right">Amount</div>
                </div>
              </th>
              <th className="title">Amount</th>
            </tr>
          </thead>

          <tbody>
            {itemlist.map((x, i) => {
              return (
                <tr
                  key={i}
                  className="item-row"
                // onSelect={() => { setIndex(i); console.log("select", i) }}
                // onBlur={() => setIndex(null)}
                >
                  <td className="title-input invoice__item--index">
                    {/* {index === i ? */}
                    <div disabled={!isEdit} onClick={() => handleItemRemove(i)}>
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                    {/* : <div>
                        {i}
                      </div>
                    } */}
                  </td>
                  <td className="title-input invoice__item--searchbox">
                    <input
                      readOnly={!isEdit}
                      className="itemList-input"
                      name="name"
                      value={itemlist[i].name}
                      onChange={(e) => handleSearchQuery(e, i)}
                    />
                    {open && index === i && (
                      <div className="invoice__item--search">
                        <ItemSearchBox
                          onClose={() => setOpen(false)}
                          items={result}
                          index={i}
                          setItemInput={setItemInput}
                          handleItemAdd={handleItemAdd}
                        />
                      </div>
                    )}
                  </td>
                  <td className="title-input">
                    <input
                      readOnly={!isEdit}
                      className="itemList-input"
                      name="itemCode"
                      value={itemlist[i].itemCode}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      readOnly={!isEdit}
                      className="itemList-input"
                      name="quantity"
                      value={itemlist[i].openigStockQuantity}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      readOnly={!isEdit}
                      className="itemList-input"
                      name="unit"
                      value={itemlist[i].unit}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      readOnly
                      className="itemList-input"
                      name="purchasePrice"
                      value={itemlist[i].purchasePrice}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      readOnly
                      className="itemList-input"
                      name="itemWiseTax"
                      value={itemlist[i].itemWiseTax}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      readOnly
                      className="itemList-input"
                      name="taxamount"
                      value={itemlist[i].taxamount}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>

                  <td className="title-input">
                    <input
                      readOnly
                      className="itemList-input"
                      name="itemAmount"
                      value={itemlist[i].itemAmount}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="itemAdd-btn">
          {itemlist.lenght !== 1 && (
            <button
              disabled={!isEdit}
              className={`btn  ${!isEdit ? "btn--disable" : "btn--secondary"}`}
              onClick={() => handleItemAdd()}
            >
              Add Item
            </button>
          )}
        </div>
        <div className="belowtable">
          <div className="paymentinputleft "></div>
          <div className="paymentinputright">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              className="checkboxinput"
            />
            <label htmlFor="roundoff" className="roundofflabel">
              Round-off :{" "}
            </label>
            <input
              type="text"
              id="roundoff"
              name="roundoff"
              className="roundoff"
            />
            <label htmlFor="total">Total : </label>
            <input
              readOnly
              type="number"
              id="total"
              name="total"
              value={invoice?.total}
              className="totalinput"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
