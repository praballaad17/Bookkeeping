import React from 'react'
import imageone from './leftmanageuser.png';
import imagetwo from './rightmanageuser.png';
const ManageUser = () => {
  return (
    <>
     <div className="purinvoice__head" style={{ height: "65px" }}>
        <div className="leftheadpurchase">
          <span style={{ fontSize: "22px", paddingTop: "10px" }}>
            Manage Users
          </span>
        </div>
        <div className="rightheadpurchase">
          <button className="possalesbutton">Use Roles<i style={{"paddingLeft":"7px"}} className="fa-solid fa-circle-question"></i></button>
          <button className="possalesbutton">Add New User</button>
        </div>
      </div>
      <div className="manageuserbody">
        <div>
        <img style={{"width":"550px","padding":"15px"}} src={imageone} alt="logo" />
        </div>
        <div>
        <img style={{"width":"550px","padding":"15px"}} src={imagetwo} alt="logo" />
        </div>
      </div>
      <div>
      <button className="possalesbutton" style={{"marginLeft":"575px","backgroundColor":"blue","color":"white"}}>+ Add New Staff</button>
      <p style={{"textAlign":"center","fontSize":"15px","fontWeight":"400"}}>To learn more about other features different Roles are allowed to use click</p>

      </div>
    </>
  )
}

export default ManageUser