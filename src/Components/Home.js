import React from 'react'
import * as ROUTES from '../constants/routes';
import { Link } from 'react-router-dom'


import '../css/homeStyle.css'
const Home = () => {
    return (
        <div className="home-container">
            <div className="inner-div">
                <div className="home-first">
                    <h3 className='home-subheading'>Start using the websitename by creating your first Invoice</h3>
                    <Link to={ROUTES.LOGIN}><button className='button button-center'>Add Invoices</button></Link>
                </div>
                <div className="home-sec">
                    <h3 className='home-subheading'>Add your company details before starting</h3>
                    <Link to={ROUTES.LOGIN}><button className='button button-center'>My Company </button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home;