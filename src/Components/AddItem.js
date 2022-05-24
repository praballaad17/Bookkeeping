import React from "react";
// import "../css/additem.css";
export default function AddItem() {
  return (
    <div className="outerbox">
      <div className="outer">
        <h3 className="outerelement">Add Item</h3>
        <div className="upper">
          <div className="upperinput">
            <input
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
            <button className="button11">Select Unit</button>
          </div>
          <div className="upperinput upperinputlast">
            <input
              type="text"
              name=" "
              placeholder="Item Code*"
              className="textbox"
            />
          </div>
        </div>
        <div className="lower">
          <span className="lowerspantag">Pricing</span>
          <span className="lowerspantag">Stock</span>
          <hr />
          <div className="lowerupper">
            <span className="salepricespan">Sale Price</span>
            <div className="lowerupperinput">
              <input
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

            <span className="wholesalespan">WholeSale Price</span>
            <div className="lowerupperinput">
              <input
                type="number"
                name=" "
                placeholder="WholeSale Price"
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
                placeholder="Minimum Wholesale Quantity"
                className="inputtextlower"
                min="0"
              />
            </div>
          </div>
          <div className="lowerbottom">
              <div className="lowerbottominput">
                <span className="wholesalespan">Purchase Price</span>
                <div className="lowerupperinput">
                <input
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
                <select id="taxes" name="" className="selecttaxes">
                    <option value="None">None</option>
                    <option value="igst0">IGST @0%</option>
                    <option value="gst0">GST @0%</option>
                    <option value="igst0.25">IGST @0.25%</option>
                    <option value="gst0.25">GST @0.25%</option>
                    <option value="igst3">IGST @3%</option>
                    <option value="gst3">GST @3%</option>
                    <option value="igst5">IGST @5%</option>
                    <option value="gst5">GST @5%</option>
                    <option value="igst12">IGST @12%</option>
                    <option value="gst12">GST @12%</option>
                    <option value="igst18">IGST @18%</option>
                    <option value="gst18">GST @18%</option>
                    <option value="igst28">IGST @28%</option>
                    <option value="gst28">GST @28%</option>
                    <option value="exempted">Exempted</option>
                </select>
                </div>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
}
