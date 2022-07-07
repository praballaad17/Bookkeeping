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
        <div className="modal-layout heeeeeee" onClick={onClose}></div>
        <div className="detailsmodalallclassestestbox">
          <div className="checcc">
            <div className="div-cross cross">
              <i className="fa fa-remove " onClick={onClose}></i>
            </div>
            <div className="columsss">
              <div className="itemjjj">
                <label htmlFor="bname">Business Name</label>
                <input id="bname" type="text" name="bname" required />
              </div>
              <div className="itemjjj">
                <label htmlFor="email"> Email Address</label>
                <input id="email" type="email" name="lname" required />
              </div>
              <div className="itemjjj">
                <label htmlFor="tel">Contact-No:</label>
                <input id="tel" type="tel" name="address1" required />
              </div>
              <div className="itemjjj">
                <label htmlFor="state">State</label>
                <input id="state" type="text" name="state" required />
              </div>
              <div className="itemjjj">
                <label htmlFor="zip">Zip/Postal Code</label>
                <input id="zip" type="text" name="zip" required />
              </div>
              <div className="itemjjj">
                <label htmlFor="gstin">GST IN</label>
                <input id="gstin" type="text" name="gstin" required />
              </div>
              <div className="itemjjj">
                <label htmlFor="businesstype">Business Type</label>
                <select
                  id="types"
                  className="detailmodalselect"
                  name="business"
                >
                  <option value="none">None</option>
                  <option value="Retail">Retail</option>
                  <option value="WholeSale">WholeSale</option>
                  <option value="Distributor">Distributor</option>
                  <option value="Service">Service</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="itemjjj">
                <label htmlFor="businessCategory">Business Category</label>
                <select
                  id="types"
                  className="detailmodalselect"
                  name="business"
                >
                  <option value="none">None</option>
                  <option value="Accounts">Accounts or CA</option>
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
              <div className="itemjjj">
                <label htmlFor="phone">Business Discription</label>
                <textarea
                  rows="4"
                  cols="24"
                  name="comment"
                  form="usrform"
                  placeholder="Discription.."
                  className="textareabusiness"
                ></textarea>
              </div>
              <div className="itemjjj">
                <label htmlFor="phone">Business Address</label>
                <textarea
                  rows="4"
                  cols="24"
                  name="comment"
                  form="usrform"
                  placeholder="Address.."
                  className="textareabusiness"
                ></textarea>
              </div>
            </div>
            <div className="btn-block">
              <button className="buttondetailmodal" type="submit" href="/">
                Submit
              </button>
            </div>
          </div>
        </div>
    </>,
    document.getElementById("modal")
  );
}

{
  /* <ul className="modal-box__list">
            <li className="progress__box">
                <span className="progress-bar"></span>
            </li>
            {/* <li className="modal-box__label" >{progress}</li> */
}
{
  /* </ul> */
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
