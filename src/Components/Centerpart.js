import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom'


import '../css/Centerpartstyle.css'
const Centerpart = () => {
    return (
    <div className="container">
        <div className="center">
            <div className="left">

            </div>
            <div className="right">
                <div className="first">
                <h3>Start using the websitename by creating your first Invoice</h3>
                <button className='button'><Link to={ROUTES.LOGIN}><span>Add Invoices</span></Link></button>
                </div>
                <div className="sec">
                <h3>Add your company details before starting</h3>
                <button className='button'><Link to={ROUTES.LOGIN}><span>My Company </span></Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Centerpart