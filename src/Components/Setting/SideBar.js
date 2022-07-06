import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate()
    return (
        <div className='settingsidebar'>
            <button disabled style={{ "fontSize": "20px", "backgroundColor": "black", "color": "white", "padding": "10px 10px 10px 15px" }}>SETTINGS<i className="fa-solid fa-magnifying-glass" style={{ "marginLeft": "80px" }}></i></button>
            <button className='btn btn--primary' style={{"marginLeft":"15px"}} onClick={() => navigate('/')}> <i className="fa-solid fa-arrow-left editbox--back"></i>Back To Dashboard</button>
            <hr />
            <a href="/setting/account "><i className="fa-solid fa-users"></i>Account</a>
            <a href="/setting/managebusiness "><i className="fa-solid fa-list-check"></i>Manage Business</a>
            <a href="/setting/invoicetheme "><i className="fa-solid fa-file-invoice"></i>Invoice Themes</a>
            <a href="/setting/manageuser"><i className="fa-solid fa-circle-user"></i>Manage Users</a>
            <a href="/setting/reminder"><i className="fa-solid fa-clock"></i>Reminder</a>
            <hr />
            <a href=""><i className="fa-solid fa-arrow-right-from-bracket"></i>Logout</a>
            {/* <a href="/setting/partiii">PARTY</a>
            <a href="/setting/item">ITEM</a> */}
        </div>
    )
}
