import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { createParty } from "../../services/partyServices";
import { useUser } from "../../Context/userContext"

export default function AddParties({ open, onClose }) {
  const [party, setParty] = useState({
    name: "",
    phone: "",
    email: "",
    balance: "",
    parytType: "custumer",
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
    if (e.target.name === "balanceType") {
      if (e.target.value === "pay") {
        let tempBalance = Math.abs(parseInt(party.balance)) * -1
        setParty({
          ...party,
          balance: tempBalance
        })
      }
      if (e.target.value === "collect") {
        let tempBalance = Math.abs(parseInt(party.balance))
        setParty({
          ...party,
          balance: tempBalance
        })
      }
      return
    }
    setParty({
      ...party,
      [e.target.name]: e.target.value
    })

  }

  console.log(party);

  // if (!open) return null;
  return (
    <>
      {/* <div className="modal-layout" onClick={onClose} ></div> */}
      <div className="partymain">
        <div className="partytop">
          <div>
            <span>Add Party</span>
          </div>
          <div className="partytopicon">
            <i class="fa-solid fa-gear"></i>
            <i onClick={() => onClose()} class="fa-solid fa-xmark"></i>
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
          <div className="middleupperinput">
            <label htmlFor="balance" className="labelclass">
              Opening Balance:
            </label>
            <input onChange={(e) => handleParty(e)} type="text" id="balance" name="balance" className="inputinput" value={party?.balance} />
            <select name="balanceType" onChange={(e) => handleParty(e)}>
              <option value="collect" >To Collect</option>
              <option value="pay">To Pay</option>
            </select>
          </div>
          <div className="middleupperinput">
            <label htmlFor="partyType" className="labelclass">
              Party Type:
            </label>
            <select name="partyType" onSelect={(e) => handleParty(e)}>
              <option defaultValue="custumer" >Custumer</option>
              <option value="supplier">Supplier</option>
            </select>
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
    </>
  );
}
