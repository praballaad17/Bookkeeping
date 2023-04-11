import React from "react";

const InvoiceTheme = () => {
  return (
    <>
      <div className="purinvoice__head" style={{ height: "65px" }}>
        <div className="leftheadpurchase">
          <span style={{ fontSize: "22px", paddingTop: "10px" }}>
            Invoice Themes
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
      <div className="bodythemeright">
        <div className="bodyrightparttheme">
          <div className="bodyrightpartthemeheading">
            Select your invoice theme
            <hr />
          </div>
          <div className="bodyrightpartthemebody">
            <button className="bodyrightpartthemebodybutton"> Stylish</button>
            <button className="bodyrightpartthemebodybutton">
              {" "}
              Advanced GST (Tally)
            </button>
            <button className="bodyrightpartthemebodybutton">
              {" "}
              Advanced GST
            </button>
            <button className="bodyrightpartthemebodybutton"> BillBook</button>
            <button className="bodyrightpartthemebodybutton">
              {" "}
              Advanced GST(A5)
            </button>
            <button className="bodyrightpartthemebodybutton">
              {" "}
              BillBook(A5)
            </button>
            <button className="bodyrightpartthemebodybutton"> Modern</button>
            <button className="bodyrightpartthemebodybutton"> Simple</button>
          </div>
        </div>
        <div className="bodycentercolor">
        <div className="bodyrightpartthemeheading">
            Select Color
            <hr/>
          </div>
          <span className="dot" style={{"backgroundColor":"black"}}></span>
          <span className="dot" style={{"backgroundColor":"green"}}></span>
          <span className="dot" style={{"backgroundColor":"blue"}}></span>
          <span className="dot" style={{"backgroundColor":"purple"}}></span>
          <span className="dot" style={{"backgroundColor":"red"}}></span>
          <span className="dot" style={{"backgroundColor":"grey"}}></span>
          <span className="dot" style={{"backgroundColor":"yellow"}}></span>
          <span className="dot" style={{"backgroundColor":"orange"}}></span>
        </div>
        <div className="bodycenterinvoice">
              BILL WILL BE DISPLAYED HERE
        </div>
      </div>
    </>
  );
};

export default InvoiceTheme;
