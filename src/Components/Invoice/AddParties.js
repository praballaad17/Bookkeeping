import React, { useEffect, useState } from "react";
import { createParty } from "../../services/partyServices";
import { useUser } from "../../Context/userContext"

export default function AddParties() {
  const [party, setParty] = useState({
    name: "",
    phone: "",
    email: "",
    balance: "",
    parytType: "",
    partyCatagory: "",
    gstin: "",
    placeOfSupply: "",
    panNumber: "",
    billAddress: "",
    shippingAddress: "",
    creditPeriod: "",
    creditLimit: "",
  })
  const { user } = useUser()

  const addParty = async () => {
    console.log("sumit");
    try {
      const rparty = await createParty(party, user?.id)
      console.log(rparty);
    } catch (error) {
      console.log(error);
    }
  }

  const handleParty = (e) => {
    console.log(e.target.name, e.target.value);
    setParty({
      ...party,
      [e.target.name]: e.target.value
    })

  }

  console.log(party);

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
          <input onChange={(e) => handleParty(e)} type="text" id="name" name="name" className="inputinput" />
        </div>
        <div className="middleupperinput">
          <label htmlFor="gstin" className="labelclass">
            GST IN:
          </label>
          <input onChange={(e) => handleParty(e)} type="text" id="gstin" name="gstin" className="inputinput" />
        </div>
        <div className="middleupperinput">
          <label htmlFor="gst" className="labelclass">
            Phone Number:
          </label>
          <input onChange={(e) => handleParty(e)} type="tel" id="phone" name="phone" className="inputinput" />
        </div>
      </div>
      <div className="middlebottomparty">
        <span className="gstaddress">GST & Address</span>
        <span className="opening balance">Opening Balance</span>
        <hr className="partyhr" />
        <div className="middlebottomdata">
          <div className="gstdetails">
            <div><span className="spangstdetails">GST Details</span></div>
            <div> <select onChange={(e) => handleParty(e)} id="parytType" name="parytType">
              <option value="" disabled selected hidden>
                GST Type
              </option>
              <option value="unresitered">Unregistered/Consumer</option>
              <option value="Retail">Retail</option>
              <option value="WholeSale">WholeSale</option>
            </select></div>
            <div><select onChange={(e) => handleParty(e)} id="placeOfSupply" name="placeOfSupply">
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
              onChange={(e) => handleParty(e)}
            /></div>
          </div>
          <div class="vl"></div>
          <div className="billAddress">
            <div><span>Billing Address</span></div>
            <div>
              <textarea
                rows="5"
                cols="40"
                name="billAddress"
                form="usrform"
                placeholder="Billing Address"
                className="billingaddressparty"
                onChange={(e) => handleParty(e)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="bottompartydata">
          <button class=" button11 partybutton">
            Save & New
          </button>
          <button onClick={addParty} class="button11 partybutton">Save</button>
        </div>
      </div>
    </div>
  );
}
