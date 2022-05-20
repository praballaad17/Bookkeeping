import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../constants/routes";


export default function Item() {
    return (
        <>
            <div>Item</div>
            <button><Link to={ROUTES.ADDITEM}>Add Item</Link></button>

        </>
    )
}
