import React from 'react'

export default function SideBar() {
    return (
        <div className='settingsidebar'>
            <button disabled style={{ "fontSize": "20px", "backgroundColor": "black", "color": "white", "padding": "10px 10px 10px 15px" }}>SETTINGS<i className="fa-solid fa-magnifying-glass" style={{ "marginLeft": "80px" }}></i></button>
            <hr />
            <a href="/setting/general ">GENERAL</a>
            <a href="#transaction ">TRANSACTION</a>
            <a href="#print ">PRINT</a>
            <a href="#taxes">TAXES & GST</a>
            <a href="#management">USER MANAGEMENT</a>
            <a href="#transaction">TRANSACTION MESSAGE</a>
            <a href="#party">PARTY</a>
            <a href="#item">ITEM</a>
        </div>
    )
}
