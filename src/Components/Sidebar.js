import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <a className="active" href="#home"><FontAwesomeIcon icon="fa-regular fa-house" /> Home</a>
            <a href="#parties"><FontAwesomeIcon icon="fa-thin fa-users" />Parties</a>
            <a href="#Item"><FontAwesomeIcon icon="fa-thin fa-box-archive" />Item</a>
            <a href="#Sale"><FontAwesomeIcon icon="fa-thin fa-note" />Sales</a>
            <a href="#Purchases"><FontAwesomeIcon icon="fa-thin fa-cart-plus" />Purchases</a>
            <a href="#Expenses"><FontAwesomeIcon icon="fa-thin fa-wallet" />Expenses</a>
            <a href="#Cash"><FontAwesomeIcon icon="fa-thin fa-building-columns" />Cash and Bank</a>
            <a href="#Online"><FontAwesomeIcon icon="fa-thin fa-shop" />My Online Store</a>
            <a href="#Reports"><FontAwesomeIcon icon="fa-thin fa-signal-bars-good" />Reports</a>
            <hr />
            <a href="#Otherproducts"><FontAwesomeIcon icon="fa-thin fa-circle-stop" />Other Products</a>
            <a href="#sync"><FontAwesomeIcon icon="fa-thin fa-rotate" />Sync</a>
            <a href="#Backup"><FontAwesomeIcon icon="fa-thin fa-window-restore" />Backup/Restore</a>
            <a href="#Utilities"><FontAwesomeIcon icon="fa-thin fa-screwdriver-wrench" />Utilities</a>
            <a href="#Settings"><FontAwesomeIcon icon="fa-regular fa-gear" />Settings</a>
            <hr />
            <a href="#Demo"><FontAwesomeIcon icon="fa-brands fa-youtube-square" />Request a Demo</a>
            <a href="#Feedback"><FontAwesomeIcon icon="fa-regular fa-star" />Share Feedback</a>
        </div>
    )
}
