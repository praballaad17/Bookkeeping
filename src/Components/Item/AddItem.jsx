import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addItem } from "../../services/ItemServices";
import { GSTRATES } from "../../constants/variables";
import { useUser } from "../../Context/userContext";
import * as ROUTES from "../../constants/routes";
import { useData } from "../../Context/dataContext";

export default function AddItem() {
  const [item, setItem] = useState();
  const navigate = useNavigate();
  const { user, addToast } = useUser();
  const { addLocalItem } = useData();

  const handleAddItem = async () => {
    try {
      const res = await addItem(item, user.id);
      addLocalItem(item);
      addToast(`${item.name} is added successfully`);
    } catch (error) {
      addToast("Error", true);
    }
  };

  return (
    <div className="outerbox">
      <div className="outer">
        <div className="outerelement">
          <i
            onClick={() => navigate(-1)}
            className="fa-solid fa-arrow-left editbox--back"
          ></i>
          <h3 className="">Add Item</h3>
        </div>
        <div className="upper">
          <div className="upperinput">
            <input
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              type="text"
              name=" "
              placeholder="Item Name*"
              className="textbox"
              required
            />
          </div>
          <div className="upperinput">
            <input
              type="number"
              name=" "
              placeholder="Item HSN"
              className="textbox "
              min="1"
            />
          </div>
          <div className="upperinput">
            <button className="upperinputbutton">Select Unit</button>
          </div>
          <div className="upperinput upperinputlast">
            <input
              onChange={(e) => setItem({ ...item, itemCode: e.target.value })}
              type="text"
              name=" "
              placeholder="Item Code*"
              className="textbox"
            />
          </div>
        </div>
        <div className="lower">
          <div className="lowerupper">
            <span className="salepricespan">Sale Price</span>
            <div className="lowerupperinput">
              <input
                onChange={(e) =>
                  setItem({ ...item, salePrice: e.target.value })
                }
                type="number"
                name=" "
                placeholder="Sale Price"
                className="inputtextlower"
                min="0"
              />
              <select id="taxes" name="" className="inputtextlower">
                <option value="withtax">With tax</option>
                <option value="withouttax">Withour tax</option>
              </select>
            </div>
            <div className="lowerupperinput">
              <input
                type="number"
                name=" "
                placeholder="Disc. on Sale price"
                className="inputtextlower "
                min="0"
              />
              <select id="type" name="" className="inputtextlower">
                <option value="percentage">Percentage</option>
                <option value="amount">Amount</option>
              </select>
            </div>
          </div>
          <div className="lowerbottom">
            <div className="lowerbottominput">
              <span className="wholesalespan">Purchase Price</span>
              <div className="lowerupperinput">
                <input
                  onChange={(e) =>
                    setItem({ ...item, purchasePrice: e.target.value })
                  }
                  type="number"
                  name=" "
                  placeholder="Purchase Price"
                  className="inputtextlower"
                  min="0"
                />
                <select id="taxes" name="" className="inputtextlower">
                  <option value="withtax">With tax</option>
                  <option value="withouttax">Withour tax</option>
                </select>
              </div>
            </div>

            <div className="lowerbottominput">
              <span className="wholesalespan">Tax rate</span>
              <div className="lowerupperinput">
                <select
                  onChange={(e) =>
                    setItem({ ...item, itemWiseTax: e.target.value })
                  }
                  id="taxes"
                  name=""
                  className="selecttaxes"
                >
                  <option value="None">None</option>
                  {GSTRATES.map((item) => (
                    <option value={item}>GST @{item}%</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="lowerbottom">
            <div className="lowerbottominput">
              <span className="wholesalespan">Opening Stock</span>
              <div className="lowerupperinput">
                <input
                  onChange={(e) =>
                    setItem({ ...item, openigStockQuantity: e.target.value })
                  }
                  type="number"
                  name=" "
                  placeholder="Opening Stock"
                  className="inputtextlower"
                  min="0"
                />
              </div>
            </div>
          </div>
          <div className="lowerbuttons">
            <div className="lowerbuttoninput">
              <button
                onClick={() => {
                  handleAddItem();
                  navigate(ROUTES.ITEM);
                }}
                className="button12"
              >
                Save
              </button>
            </div>
            <div className="lowerbuttoninput">
              <button
                onClick={() => {
                  handleAddItem();
                  navigate(ROUTES.ADDITEM);
                }}
                className="button12"
              >
                Save & New
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
