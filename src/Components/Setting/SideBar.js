import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate()
    return (
        <div className='settingsidebar'>
            <button disabled style={{ "fontSize": "20px", "backgroundColor": "black", "color": "white", "padding": "10px 10px 10px 15px" }}>SETTINGS<i className="fa-solid fa-magnifying-glass" style={{ "marginLeft": "80px" }}></i></button>
            <button className='btn btn--primary' style={{"marginLeft":"15px"}} onClick={() => navigate('/')}> <i className="fa-solid fa-arrow-left editbox--back"></i>Back To Dashboard</button>
            <hr />
            <a href="/setting/general ">GENERAL</a>
            <a href="/setting/transaction ">TRANSACTION</a>
            <a href="/setting/priiint ">PRINT</a>
            <a href="/setting/taxes">TAXES & GST</a>
            <a href="/setting/management">USER MANAGEMENT</a>
            <a href="/setting/transaction">TRANSACTION MESSAGE</a>
            <a href="/setting/partiii">PARTY</a>
            <a href="/setting/item">ITEM</a>
        </div>
    )
}
