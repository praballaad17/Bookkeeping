import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideBar() {
    const navigate = useNavigate()
    return (
        <div className='settingsidebar'>
            <button disabled style={{ "fontSize": "20px", "backgroundColor": "black", "color": "white", "padding": "10px 10px 10px 15px" }}>SETTINGS<i className="fa-solid fa-magnifying-glass" style={{ "marginLeft": "80px" }}></i></button>
            <button className='btn btn--primary' onClick={() => navigate('/')}> <i className="fa-solid fa-arrow-left editbox--back"></i>Back To Dashboard</button>
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
