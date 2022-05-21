import React from 'react'
import "../css/services.css";
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div className="services">
    <img src="https://media.istockphoto.com/vectors/insurance-hand-icon-risk-coverage-sign-vector-vector-id1226966972?k=20&m=1226966972&s=612x612&w=0&h=4STddzCaJjYZNagXpw8PS2odwiNXm559OsNHwUMfFhE=" className='servicesimage' alt=""  />
    <p className='servicestext'>Add services you provide to your customers and create Sale invoices for them faster.</p>
 <button className='add-services-button'><Link to="">Add Your First Service</Link></button>
</div> 
  )
}

export default Services