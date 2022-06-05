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
              <option value="AP">Arunachal Pradesh</option>
              <option value="AS">Assam</option>
              <option value="BI">Bihar</option>
              <option value="CH">Chhatisgarh</option>
              <option value="GO">Goa</option>
              <option value="GU">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JK">Jammu and Kashmir</option>
              <option value="JH">Jharkhand</option>
              <option value="KR">Karnataka</option>
              <option value="BI">Bihar</option>
              <option value="kr">Kerela</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="MG">Meghalaya</option>
              <option value="MR">Mizoram</option>
              <option value="NA">Nagaland</option>
              <option value="OD">Odisha</option>
              <option value="PB">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">TamilNadu</option>
              <option value="TE">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="UK">Uttarakhand</option>
              <option value="WB">West Bengal</option>
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
