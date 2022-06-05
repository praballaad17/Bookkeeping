import React from 'react'
import { Link } from 'react-router-dom';

import "../css/item.css";
const Products = () => {
  return (
       <div className="products">
                <img src="https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" className='productimage' alt=""  />
                <p className='producttext'>Add Products/Items you sell or purchase to manage your full Stock Inventory.</p>
             <button className='add-item-button'><Link to="">Add Your First Product</Link></button>
            </div> 
  )
}

export default Products