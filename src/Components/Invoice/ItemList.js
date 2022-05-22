import React, { useState } from "react";

export default function ItemList() {
  const [itemlist, setitemlist] = useState([
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

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itemlist];
    list[index][name] = value;
    setitemlist(list);
  };

  const handleItemAdd = () => {
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
      <div className="individual-row">
        <div className="item-heading">
          <div class="title-item title">Item</div>
          <div class="title">Item Code</div>
          <div class="title">Quantity</div>
          <div class="title">Unit</div>
          <div class="title-ppu title">Price/Unit</div>
          <div class="title">Tax</div>
          <div class="title">Amount</div>
        </div>
        {/* <div className="listofItems"></div> */}
        {itemlist.map((x, i) => {
          return (
            <div className="item-row">
              <div class="title-item-input title-input">
                <input
                  className="itemList-input"
                  name="item"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-input">
                <input
                  className="itemList-input"
                  name="itemCode"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-input">
                <input
                  className="itemList-input"
                  name="quantity"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-input">
                <input
                  className="itemList-input"
                  name="unit"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-ppu-input title-input">
                <input
                  className="itemList-input"
                  name="pricePerUnit"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-ppu-input title-input">
                <input
                  className="itemList-input"
                  name="taxPercent"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-input">
                <input
                  className="itemList-input"
                  name="taxamount"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div class="title-input">
                <input
                  className="itemList-input"
                  name="amount"
                  onChange={(e) => handleChange()}
                />
              </div>
              <div className="itemremove-btn">
                {itemlist.lenght !== 1 && (
                  <button
                    className="remove-btn"
                    onClick={() => handleItemRemove(i)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="itemAdd-btn">
          {itemlist.lenght !== 1 && (
            <button className="add-btn" onClick={() => handleItemAdd()}>
              Add Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
