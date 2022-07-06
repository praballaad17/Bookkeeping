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
        <div className="managebusinessbodyleft">hello</div>
        <div className="managebusinessbodyright">hi</div>
      </div>
    </>
  );
};

export default ManageBusiness;
