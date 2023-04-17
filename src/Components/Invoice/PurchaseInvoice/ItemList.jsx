import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../Context/userContext";
import { searchItem } from "../../../services/ItemServices";
import { getPartyByUserId } from "../../../services/partyServices";
import ItemSearchBox from "../ItemSearchBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function ItemList({
  isEdit,
  itemlist,
  invoice,
  setitemlist,
  handleInvoice,
  handleTotalAmount,
}) {
  const navigate = useNavigate();
  const { user } = useUser();
  const [index, setIndex] = useState(null);
  // const [row,setRow] = useState()
  const [result, setResult] = useState([]);
  const [open, setOpen] = useState(false);
  const [supplier, setSupplier] = useState([]);

  useEffect(() => {
    const getSupplier = async () => {
      try {
        const supplier = await getPartyByUserId(user?.id, "supplier");
        setSupplier(supplier);
      } catch (error) {
        console.log(error);
      }
    };
    getSupplier();
  }, []);

  const calculatTaxAmount = (taxPer, price, unit) => {
    return (taxPer * price * unit) / 100;
  };

  const calculatItemAmount = (price, unit, tax) => {
    return price * unit + tax;
  };

  const handleChange = (e, index) => {
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;
    console.log(e.target.value, e.target.name);
    if (e.target.name === "itemWiseTax" || e.target.name === "unit") {
      let taxper = e.target.value;
      console.log(taxper.split("@").pop().split("%"));
      list[index]["taxamount"] = calculatTaxAmount(
        parseInt(list[index]["itemWiseTax"].split("@").pop().split("%")[0]),
        parseInt(list[index]["purchasePrice"]),
        list[index]["unit"]
      );
      const previousAmount = list[index]["itemAmount"];
      list[index]["itemAmount"] = calculatItemAmount(
        parseInt(list[index]["purchasePrice"]),
        list[index]["unit"],
        list[index]["taxamount"]
      );
      handleTotalAmount(list[index]["itemAmount"] - previousAmount);
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
          <span className="fs-3">PURCHASE</span>
          <div>
            <FontAwesomeIcon className="fs-2 mx-3" icon={faCalculator} />
            <FontAwesomeIcon
              className="fs-2 mx-3"
              icon={faTimes}
              onClick={() => navigate("/purchase")}
            />
          </div>
        </div>
        <div className="above">
          <div className="abovetable">
            <div className="partyinput ">
              <select
                onChange={(e) => {
                  handleInvoice(e);
                }}
                id="partyId"
                name="partyId"
                className="partyinputs"
              >
                <option value="party">Supplier *</option>
                {supplier &&
                  supplier.length &&
                  supplier.map((supplier) => (
                    <option key={supplier?._id} value={supplier?._id}>
                      {supplier?.name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Bill Number : </label>
              <input
                readOnly={!isEdit}
                value={invoice?.invoiceNumber}
                onChange={(e) => handleInvoice(e)}
                type="tel"
                id="invoiceNumber"
                name="invoiceNumber"
              />
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
              <input
                readOnly={!isEdit}
                defaultValue={invoice?.date}
                type="date"
                id="date"
                name="date"
                onChange={(e) => handleInvoice(e)}
              />
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
          {/* <div className="listofItems"></div> */}
          <tbody>
            {itemlist.map((x, i) => {
              return (
                <tr
                  key={i}
                  className="item-row"
                  // onSelect={() => { setIndex(i); console.log("select", i) }}
                  // onBlur={() => setIndex(null)}
                >
                  <td
                    disabled={!isEdit}
                    className="title-input invoice__item--index"
                  >
                    {/* {index === i ? */}
                    <div onClick={() => handleItemRemove(i)}>
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
          <div className="paymentinputleft ">
            <label htmlFor="payment">Payment Mode : </label>
            <select id="types" name="payment" className="paymentmode">
              <option value="Cash">Cash</option>
              <option value="Retail">One</option>
              <option value="WholeSale">Two</option>
            </select>
          </div>
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
