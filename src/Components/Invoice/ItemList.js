import React from "react";

export default function ItemList({ itemlist, setitemlist }) {
  const handleChange = (e, index) => {
    var list = [...itemlist];
    list[index][e.target.name] = e.target.value;
    setitemlist(list);
  };

  const handleItemAdd = () => {
    console.log(itemlist);
    setitemlist([
      ...itemlist,
      {
        item: "",
        itemCategory: "",
        itemCode: "",
        decription: "",
        discount: "",
        quantity: "",
        unit: "",
        pricePerUnit: "",
        taxPercent: "",
        taxamount: "",
        amount: "",
      },
    ]);
  };
  const handleItemRemove = (index) => {
    const list = [...itemlist];
    list.splice(index, 1);
    setitemlist(list);
  };

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
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="item"
                      value={itemlist[i].item}
                      onChange={(e) => handleChange(e, i)}
                    />
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
                      value={itemlist[i].quantity}
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
                      name="pricePerUnit"
                      value={itemlist[i].pricePerUnit}
                      onChange={(e) => handleChange(e, i)}
                    />
                  </td>
                  <td className="title-input">
                    <input
                      className="itemList-input"
                      name="taxPercent"
                      value={itemlist[i].taxPercent}
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
            <label htmlFor="payment">Payment Mode:</label>
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
