import React from "react";

const ManageBusiness = () => {
  return (
    <>
      <div className="purinvoice__head" style={{ height: "65px" }}>
        <div className="leftheadpurchase">
          <span>Business Settings</span>
          <span className="smallfontpurchase">
            Edit Your Business Settings And Information
          </span>
        </div>
        <div className="rightheadpurchase">
          <i className="fa-solid fa-keyboard"></i>
          <button className="invoicesettingbutton">
            <i style={{ margin: "0" }} className="fa-solid fa-comment"></i>Chat
            support
          </button>
          <button className="possalesbutton">Create New Business</button>
          <button className="possalesbutton"> Cancel</button>
          <button className="possalesbutton">Save Changes</button>
        </div>
      </div>
      <div className="managebusinees">
        <div className="managebusinessbodyleft">
          <div>
            <label htmlFor="bname">Business Name</label>
            <input
              type="bname"
              id="bname"
              name="bname"
              placeholder="BUSINESS NAME"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label htmlFor="phoneoninvoice">Show phone Number on Invoice</label>
            {/* <span>Show phone Number on Invoice</span> */}
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <label htmlFor="number">Company Phone Number</label>
            <input
              type="tel"
              id="number"
              name="number"
              placeholder="PHONE NUMBER"
            />
          </div>
          <div>
            <label htmlFor="phone">Billing Address</label>
            <textarea
              rows="4"
              cols="1"
              name="comment"
              form="usrform"
              placeholder="BILLING ADDRESS.."
              className="billingadress"
            ></textarea>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <label htmlFor="gstregistered">Are you GST Registered?</label>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <label htmlFor="pannumber">PAN Number</label>
            <input
              type=""
              id="pannumber"
              name="pannumber"
              placeholder="PAN NUMBER"
            />
          </div>
          <div>
            <label htmlFor="placeofsupply">Place of Supply</label>
            <select id="types" name="states" style={{ width: "80%" }}>
              <option value="" disabled selected hidden>
                {" "}
                Place of Supply(State){" "}
              </option>
              <option value="Andaman Nicobar Islands">
                Andaman & Nicobar Islands
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra  Nagar Haveli">Dadra & Nagar Haveli</option>
              <option value="Daman Diu">Daman & Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu  Kashmir">Jammu & Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Puducherry">Puducherry</option>
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
          </div>
        </div>
        <div className="managebusinessbodyright">
          <div className="managerightupperpart">
            <div>
              <label htmlFor="placeofsupply">Business Type</label>
              <select id="types" name="states" style={{ width: "80%" }}>
                <option value="" disabled selected hidden>
                  {" "}
                  Type of Business{" "}
                </option>
                <option value="Retailer">Retailer</option>
                <option value="WholeSaler">WholeSaler</option>
                <option value="Distributor">Distributor</option>
                <option value="Manufacturer">Manufacturer</option>
                <option value="Services">Services</option>
              </select>
            </div>
            <div>
              <label htmlFor="placeofsupply">Industry Type</label>
              <select id="types" name="states" style={{ width: "80%" }}>
                <option value="" disabled selected hidden>
                  {" "}
                  Type of Industry{" "}
                </option>
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
          </div>
          <div>
            <span
              style={{
                fontSize: "15px",
                backgroundColor: "yellow",
                fontWeight: "550",
                display: "inline",
              }}
            >
              <b> Note:</b> Terms & Conditions and Signature added below will be
              shown on your Invoices
            </span>
          </div>
          <div className="bankdetails">
            <label htmlFor="bankdetails">Bank Details</label>
            <button className="bankdetailsbutton">+ Add Bank Details</button>
          </div>
          <div className="bankdetails">
            <label htmlFor="upiid">UPI ID</label>
            <input
              type="text"
              id="upiid"
              name="upiid"
              placeholder="Enter your UPI ID"
            />
          </div>
          <div className="termconditions">
            <label htmlFor="TandC" style={{ fontSize: "20px" }}>
              Term and Conditions
            </label>
            <div className="TandCspan">
              <p>1. Goods once sold will not be taken back or exchanged</p>
              <p>
                2. All disputes are subject to [ENTER_YOUR_CITY_NAME]
                jurisdiction only
              </p>
            </div>
          </div>
          <div className="bankdetails">
            <label htmlFor="signature">Signature</label>
            <button className="signaturebutton">+ Add Signature</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageBusiness;
