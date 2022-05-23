import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDom from "react-dom";
import "../css/DetailModal.css";

export default function DetailsModal({ open, onClose }) {
  // useEffect(() => {
  //     document.querySelector(".progress__bar").style.width = progress
  // }, [progress])
  // {!open ? return(  ) : return <></>}
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      {/* <div className="modal-layout" ></div>  */}
      <div className="modal-layout" onClick={onClose} ></div>
      <div className="detailmodal-box">
        <div className="crosstag">
          <div className="modal-box__head">
            <div>
              Business Details
            </div>
            <div className="div-cross">
              <i className="fa-solid fa-xmark cross" onClick={onClose}></i>
            </div>
          </div>
          <div className="left">
            <div className="subleft-left">
              <div className="leftinput">
                <label className="modal-box__label">Business Name</label>
                <input
                  type="text"
                  name=" "
                  placeholder=""
                  className="textbox"
                />
              </div>
              <div className="leftinput">
                <label for="phone" className="modal-box__label">
                  Contact-No:
                </label>
                <input
                  type="tel"
                  className="textbox"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                ></input>
              </div>
            </div>

            <div className="subleft-right">
              <div className="leftinput ">
                <label
                  for="Business discription"
                  className="modal-box__label "
                >
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

              <div className="leftinput ">
                <label for="Business type" className="modal-box__label ">
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
          </div>
          <hr id="line-detailModal" />
          <div className="right">
            <div className="subright-left">
              <div className="rightinput">
                <label for="E-mail" className="modal-box__label">
                  E-mail
                </label>
                <input type="email" className="textbox" name="email"></input>
              </div>
              <div className="rightinput">
                <label for="GSTIN" className="modal-box__label">
                  GST IN
                </label>
                <input type="text" className="textbox" name="GSTIN"></input>
              </div>
            </div>

            <div className="subright-right">
              <div className="rightinput field">
                <label for="Business address" className="modal-box__label">
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
              <div className="rightinput">
                <label for="Business Category" className="modal-box__label ">
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
            </div>
          </div>
          <div className="detailModal--btn">
            <button class="button11">Save</button>
          </div>

          {/* <ul className="modal-box__list">
                    <li className="progress__box">
                        <span class="progress-bar"></span>
                    </li>
                    {/* <li className="modal-box__label" >{progress}</li> */}
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
