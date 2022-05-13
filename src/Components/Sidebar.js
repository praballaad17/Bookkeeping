import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/Sidebar.css'
export default function Sidebar({open, onClose}) {

    return (
        <div className="sidebar">
            <div className='mainbuttondiv'>
            <button type='button' className='button-main' onClick={onClose}>My Company<i class="fa-solid fa-angle-right"></i></button>
            </div>
            <a className="active " href="#home"><i class="fa-solid fa-house"></i> Home</a>
            <a href="#parties "><i class="fa-solid fa-user-group"></i>Parties</a>
            <a href="#Item "><i class="fa-solid fa-box-archive"></i>Item</a>
            <a href="#Sale "><i class="fa-solid fa-bag-shopping"></i>Sales</a>
            <a href="#Purchases "><i class="fa-solid fa-cart-plus"></i>Purchases</a>
            <a href="#Expenses "><i class="fa-solid fa-wallet"></i>Expenses</a>
            <a href="#Cash "><i class="fa-light fa-wallet"></i>Cash and Bank</a>
            <a href="#Online "><i class="fa-solid fa-store"></i>My Online Store</a>
            <a href="#Reports "><i class="fa-light fa-signal"></i>Reports</a>
            <hr />
            <a href="#Otherproducts"><i class="fa-solid fa-circle-stop"></i>Other Products</a>
            <a href="#sync"><i class="fa-solid fa-arrow-rotate-right"></i>Sync</a>
            <a href="#Backup"><i class="fa-solid fa-window-restore"></i>Backup/Restore</a>
            <a href="#Utilities"><i class="fa-solid fa-screwdriver-wrench"></i>Utilities</a>
            <a href="#Settings"><i class="fa-solid fa-gear"></i>Settings</a>
            <hr />
            <a href="#Demo"><i class="fa-brands fa-youtube-square"></i>Request a Demo</a>
            <a href="#Feedback"><i class="fa-solid fa-star"></i>Share Feedback</a>
        </div>
    )
}
