import React, { useState } from "react";

export default function AddPartiesInvoice() {
  return (
    <div className="partymain">
      <div className="partytop">
        <div>
          <span>Add Party</span>
        </div>
        <div className="partytopicon">
          <i class="fa-solid fa-gear"></i>
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="middleupperparty">
        <div className="middleupperinput">
          <label htmlFor="party" className="labelclass">
            Party Name:
          </label>
          <input type="text" id="Pname" name="Pname" className="inputinput" />
        </div>
        <div className="middleupperinput">
          <label htmlFor="gst" className="labelclass">
            GST IN:
          </label>
          <input type="text" id="Pname" name="Pname" className="inputinput" />
        </div>
        <div className="middleupperinput">
          <label htmlFor="gst" className="labelclass">
            Phone Number:
          </label>
          <input type="tel" id="phone" name="phone" className="inputinput" />
        </div>
      </div>
      <div className="middlebottomparty">
        <span className="gstaddress">GST & Address</span>
        <span className="opening balance">Opening Balance</span>
        <hr className="partyhr" />
        <div className="middlebottomdata">
          <div className="gstdetails">
            <div><span className="spangstdetails">GST Details</span></div>
            <div> <select id="types" name="gsttype">
              <option value="" disabled selected hidden>
                GST Type
              </option>
              <option value="unresitered">Unregistered/Consumer</option>
              <option value="Retail">Retail</option>
              <option value="WholeSale">WholeSale</option>
            </select></div>
            <div><select id="types" name="state">
              <option value="" disabled selected hidden>
                State
              </option>
              <option value="none">Unregistered/Consumer</option>
              <option value="Retail">Retail</option>
              <option value="WholeSale">WholeSale</option>
            </select></div>
            <div><input
              type="email"
              id="email"
              name="email"
              placeholder="Email ID"
            /></div>
          </div>
          <div class="vl"></div>
          <div className="billingaddress">
              <div><span>Billing Address</span></div>
              <div>
                <textarea
                  rows="5"
                  cols="40"
                  name="comment"
                  form="usrform"
                  placeholder="Billing Address"
                  className="billingaddressparty"
                ></textarea>
              </div>
          </div>
        </div>
        <div className="bottompartydata">
        <button class=" button11 partybutton">
            Save & New
          </button>
          <button class="button11 partybutton">Save</button>
        </div>
      </div>
    </div>
  );
}
