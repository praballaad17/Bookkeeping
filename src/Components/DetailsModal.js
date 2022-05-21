import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import "../css/detailModal.css";

export default function DetailsModal({ open, onClose }) {
  // useEffect(() => {
  //     document.querySelector(".progress__bar").style.width = progress
  // }, [progress])
  // {!open ? return(  ) : return <></>}
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      {/* <div className="modal-layout" ></div>  */}
      {/* <div className="modal-layout" ></div> */}
      <div className="modal-box">
        <div className="crosstag">
          <div className="modal-box__head">
            <div className="left">
              <div className="leftinput">
                <label className="modal-box__item">Business Name</label>
                <input
                  type="text"
                  name=" "
                  placeholder=""
                  className="textbox"
                />
              </div>
              <div className="leftinput">
                <label for="phone" className="modal-box__item">
                  Contact-No:
                </label>
                <input
                  type="tel"
                  className="textbox"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                ></input>
              </div>
              <div className="leftinput field">
                <label for="Business discription" className="modal-box__item ">
                  Business Discription
                </label>
                <textarea
                  rows="4"
                  cols="24"
                  name="comment"
                  form="usrform"
                  placeholder="Discription.."
                  className="textareabusiness"
                ></textarea>
              </div>
              {/* <div className="leftinput">
                <label for="State" className="modal-box__item">
                  State
                </label>
                <select id="types" name="states">
                  <option value="none">None</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattishgarh">Chhattishgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala ">Kerala </option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div> */}
              <div className="leftinput field2">
                <label for="Business type" className="modal-box__item ">
                  Business Type
                </label>
                <select id="types" name="business">
                  <option value="none">None</option>
                  <option value="Retail">Retail</option>
                  <option value="WholeSale">WholeSale</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Service">Service</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>
            {/* </div> */}
            <i className="fa-solid fa-xmark cross" onClick={onClose}></i>

            <div className="right">
              <div className="rightinput">
                <label for="E-mail" className="modal-box__item">
                  {" "}
                  E-mail
                </label>
                <input
                  type="email"
                  className="textbox"
                  name="email"
                ></input>{" "}
              </div>
              <div className="rightinput">
                <label for="GSTIN" className="modal-box__item">
                  GST IN
                </label>
                <input type="text" className="textbox" name="GSTIN"></input>
              </div>
              <div className="rightinput field">
                <label for="Business address" className="modal-box__item">
                  Business Address
                </label>
                <textarea
                  rows="4"
                  cols="24"
                  name="comment"
                  form="usrform"
                  placeholder="Address.."
                  className="textareabusiness"
                ></textarea>
              </div>
              <br />

              <div className="rightinput">
                <label for="Business Category" className="modal-box__item ">
                  Business Category
                </label>
                <select id="types" name="business">
                  <option value="none">None</option>
                  <option value="Accounts">Accounts or CA </option>
                  <option value="Interior">Interior Designer</option>
                  <option value="Automobiles">Automobiles/Auto parts</option>
                  <option value="Salon">Salon/Spa</option>
                  <option value="Liquor">Liquor Store</option>
                  <option value="books">Stationary</option>
                  <option value="construction">Construction</option>
                  <option value="repair">Plumbing/Electrician</option>
                  <option value="chemicals">Chemicals/Fertilizers</option>
                  <option value="Softwares">Computer Softwares</option>
                  <option value="electrical">Electrical Equipments</option>
                  <option value="fashion">Fashion Accessory</option>
                  <option value="Boutique">Tailoring/ Boutique</option>
                  <option value="fruits">Fruits/Vegetables</option>
                  <option value="general">Kirana/Genreal Merchant</option>
                  <option value="fmcg">FMCG Products</option>
                  <option value="dairy">Dairy Products</option>
                  <option value="furniture">Furniture</option>
                  <option value="garments">Garments/Hosiery</option>
                  <option value="jewellery">Jewellery/Jems</option>
                  <option value="medical">Pharmacy/Medical</option>
                  <option value="hardware">Hardware Store</option>
                  <option value="Machinery">Industrial Machinery</option>
                  <option value="mobile">Mobile and Accessories</option>
                  <option value="plants">Plants/Nursery</option>
                  <option value="petroleum">
                    Petroleum Bulk Stations an Terminals/ Petrol
                  </option>
                  <option value="hotel">Restaurant/Hotel</option>
                  <option value="footwear">Footwear</option>
                  <option value="paper">Paper and Paper Products</option>
                  <option value="bakery">Sweet Shop/Bakery</option>
                  <option value="gifts">Gifts/Toys</option>
                  <option value="laundry">Laundry/Washing/Dry clean</option>
                  <option value="coaching">Coaching and Training</option>
                  <option value="rent">Renting/Leasing</option>
                  <option value="fitness">Fitness Center</option>
                  <option value="Oil">Oil and Gas</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="NGO">NGO / Charitable trust</option>
                  <option value="tour">Tours and Travels</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="rightinput">
                <button class="button11">Save</button>
              </div>
            </div>
          </div>
          {/* <ul className="modal-box__list">
                    <li className="progress__box">
                        <span class="progress-bar"></span>
                    </li>
                    {/* <li className="modal-box__item" >{progress}</li> */}
          {/* </ul> */}
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}

//     description: {
//         type: String,
//     },

//     businessCategory: {
//         type: String,
//     },
//     address: {
//         type: String,
//     },
//     pincode: {
//         type: Number,
//     },
