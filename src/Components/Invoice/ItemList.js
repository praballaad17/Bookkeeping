import React, { useState } from "react";
import { searchItem } from "../../services/ItemServices";
import ItemSearchBox from "./ItemSearchBox";

export default function ItemList({ itemlist, setitemlist }) {
  const [index, setIndex] = useState(null);
  const [result, setResult] = useState([]);
  const [open,setOpen] = useState(false)

  const handleChange =  (e, index) => {
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;
    console.log( e.target.value,  e.target.name);
    if(e.target.name === "itemWiseTax" || e.target.name === "unit") {
      let taxper = e.target.value;
      console.log(taxper.split('@').pop().split('%'));
      list[index]["taxamount"] = taxper.split('@').pop().split('%')[0] * itemlist[index]["unit"];
    }
    setitemlist(list);
  };

  const handleSearchQuery = async (e, index) => {
    setOpen(true);
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;
    if (e.target.value === '') {
      setIndex(null);
      setOpen(false);
    }
    else {
      setIndex(index);
      setitemlist(list);
      const result = await searchItem(e.target.value);
      setResult(result);
    }
  }


  const handleItemAdd = () => {
    setitemlist([
      ...itemlist,
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
        unit: ""
      },
    ]);
  };

  const setItemInput = (item, index) => {
    let list = [...itemlist]
    list[index] = {
                    ...item,
                    unit: "",
                    taxamount: parseInt(item["purchasePrice"]) * parseInt(item["itemWiseTax"].split('@').pop().split('%')[0])
                  }
    setitemlist(list);
  }

  const handleItemRemove = (index) => {
    const list = [...itemlist];
    list.splice(index, 1);
    setitemlist(list);
  };

  console.log(itemlist);
  console.log(result);


  return (
    <div>
      <div className="scrolable">
        <div className="topnavbar">
          <span>PURCHASE</span>
          <div>
            <i className="fa-solid fa-calculator righticons"></i>
            <i className="fa-solid fa-circle-xmark righticons"></i>
          </div>
        </div>
        <div className="above">
          <div className="abovetable">
            <div className="partyinput ">
              <select id="types" name="party" className="partyinputs">
                <option value="party">Party *</option>
                <option value="Retail">One</option>
                <option value="WholeSale">Two</option>
                <option value="Distributor">Three</option>
                <option value="Service">Four</option>
                <option value="Manufacturing">Five</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label htmlFor="quantity">Bill Number : </label>
              <input type="tel" id="number" name="number" />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone No."
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>

            <div>
              <label htmlFor="billdate" className="inputbox">
                {" "}
                Bill Date :{" "}
              </label>
              <input type="date" id="billdate" name="billdate" />
            </div>
          </div>
        </div>
        <table className="item__table">
          <thead>
            <tr className="item-heading">
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
                <tr key={i} className="item-row">
                  <td className="title-input invoice__item--searchbox">
                    <input
                      className="itemList-input"
                      name="name"
                      value={itemlist[i].name}
                      onChange={(e) => handleSearchQuery(e, i)}
                    />
                    {open && index === i && <div className="invoice__item--search">
                      <ItemSearchBox onClose={() => setOpen(false)} items={result} index={i} setItemInput={setItemInput} />
                    </div>}
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="itemCode"
                      value={itemlist[i].itemCode}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="quantity"
                      value={itemlist[i].openigStockQuantity}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="unit"
                      value={itemlist[i].unit}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="purchasePrice"
                      value={itemlist[i].purchasePrice}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="itemWiseTax"
                      value={itemlist[i].itemWiseTax}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="taxamount"
                      value={itemlist[i].taxamount}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  {/* <td className="title-input">
                  <input
                    className="itemList-input"
                    name="taxamount"
                    value={itemlist[i].taxamount}
                    onChange={(e) => handleChange(e, i)}
                  />
                </td> */}
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="amount"
                      value={itemlist[i].amount}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  {/* <div className="itemremove-btn">
                  {itemlist.lenght !== 1 && (
                    <button
                      className="remove-btn"
                      onClick={() => handleItemRemove(i)}
                    >
                      Remove
                    </button>
                  )}
                </div> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="itemAdd-btn">
          {itemlist.lenght !== 1 && (
            <button
              className="btn btn--secondary"
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
              type="number"
              id="total"
              name="total"
              className="totalinput"
            />
          </div>
        </div>
        <div className="buttonsubmit">
          <button class=" sharebutton">
            Share | <i class="fa-solid fa-angle-down"></i>
          </button>
          <button class="button11 lastbutton">Save</button>
        </div>
      </div>
    </div>
  );
}
