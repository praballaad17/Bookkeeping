import React from "react";

const Account = () => {
  return (
    <>
      <div className="purinvoice__head">
        <div className="leftheadpurchase">
          <span>Account Settings</span>
          <span className="smallfontpurchase">
            Manage Your Account And Subscription
          </span>
        </div>
        <div className="rightheadpurchase">
          <i className="fa-solid fa-keyboard"></i>
          <button className="invoicesettingbutton">
            <i style={{ margin: "0" }} className="fa-solid fa-comment"></i>Chat
            support
          </button>
          <button className="possalesbutton"> Cancel</button>
          <button className="possalesbutton">Save Changes</button>
        </div>
      </div>
      <div className="accountbody">
        <h4
          style={{
            height: "45px",
            backgroundColor: "wheat",
            padding: "12px 10px",
          }}
        >
          General Information
        </h4>
        <div className="generalinformation" >
          <div className="generalinformationdata" style={{"fontSize":"15px"}}>
            <label for="fname">NAME*</label>
            <input type="text" id="fname" name="fname" placeholder="Your Name" />
          </div>
          <div className="generalinformationdata" style={{"fontSize":"15px"}}>
            <label for="mobile">MOBILE NUMBER</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Your Number"/>
          </div>
          <div className="generalinformationdata" style={{"fontSize":"15px"}}>
            <label for="email">EMAIL</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
          </div>
        </div>
        <h4
          style={{
            height: "45px",
            backgroundColor: "wheat",
            padding: "12px 10px",
          }}
        >
         Referral code for subscription discount
        </h4>
        <div className="referralinformation">
        <input style={{"marginRight":"15px"}} type="text" id="referral" name="referral" placeholder="Referral Code" />
        <button className="possalesbutton">Apply</button>
        </div>
      </div>
    </>
  );
};

export default Account;
