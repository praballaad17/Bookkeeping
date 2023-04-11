import React from 'react'
import { Link } from 'react-router-dom';
import "../css/onlinestore.css";
const Onlinestore = () => {
  return (
    <div className="onlinestore">
    <img src="https://cdn4.iconfinder.com/data/icons/ecommerce-and-drop-shipping/54/add_item_collection_list_favourite_category_1-512.png" className='onlinestoreimage' alt=""  />
    <p className='onlinestoretext'><b>Items Not Added</b><br />
                    Add atleast one item to manage your online store</p>
 <button className='add-onlinestore-button'><Link to="">Add Item</Link></button>
</div> 
  )
}

export default Onlinestore