import React from "react";

export default function ItemList({itemlist, setitemlist}) {

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
      <div className="individual-row">
        <div className="item-heading">
          <div className="title-item title">Item</div>
          <div className="title">Item Code</div>
          <div className="title">Quantity</div>
          <div className="title">Unit</div>
          <div className="title-ppu title">Price/Unit</div>
          <div className="title">Tax</div>
          <div className="title">Amount</div>
        </div>
        {/* <div className="listofItems"></div> */}
        {itemlist.map((x, i) => {
          return (
            <div key={i} className="item-row">
              <div className="title-item-input title-input">
                <input
                  className="itemList-input"
                  name="item"
                  value={itemlist[i].item}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-input">
                <input
                  className="itemList-input"
                  name="itemCode"
                  value={itemlist[i].itemCode}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-input">
                <input
                  className="itemList-input"
                  name="quantity"
                  value={itemlist[i].quantity}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-input">
                <input
                  className="itemList-input"
                  name="unit"
                  value={itemlist[i].unit}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-ppu-input title-input">
                <input
                  className="itemList-input"
                  name="pricePerUnit"
                  value={itemlist[i].pricePerUnit}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-ppu-input title-input">
                <input
                  className="itemList-input"
                  name="taxPercent"
                  value={itemlist[i].taxPercent}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-input">
                <input
                  className="itemList-input"
                  name="taxamount"
                  value={itemlist[i].taxamount}
                  onChange={(e) => handleChange(e, i)}
                />
              </div>
              <div className="title-input">
                <input
                  className="itemList-input"
                  name="amount"
                  value={itemlist[i].amount}
                  onChange={(e) => handleChange(e, i)}
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
