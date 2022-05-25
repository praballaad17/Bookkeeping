import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from "../../constants/routes";
import { useUser } from '../../Context/userContext';
import { getItemsByUserId } from '../../services/ItemServices';
import ItemIndividual from './ItemIndividual';
import ItemList from './ItemList';
// import "../css/item.css";

export default function Item() {
    const { user } = useUser();
    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            try {
                const itemArray = await getItemsByUserId(user?.id, 10, 1)
                console.log(itemArray);
                setItems(itemArray)
            } catch (error) {
                console.log(error);
            }
        }
        getItems()
    }, [])

    return (
        <>
            {items && items !== null ?
                <div className='items'>
                    <div className='item__heading'>Items</div>
                    <div className='items__box'>
                        <div className='items__box--left'>
                            <ItemList items={items} />
                        </div>
                        <div className='items__box--right'>
                            <ItemIndividual />
                        </div>
                    </div>
                    {/* <div className='item__list'>
                        <table className='importtable__table'>
                            <thead>
                                <tr>
                                    <th>Item Code</th>
                                    <th>Item Name</th>
                                    <th>HNS</th>
                                    <th>Sale Price</th>
                                    <th>Purchase Price</th>
                                    <th>Discount Type</th>
                                    <th>Sale Discount</th>
                                    <th>Opening Stock</th>
                                    <th>Minimum_stock_quantity</th>
                                    <th>Item_Location</th>
                                    <th>Tax_Rate</th>
                                    <th>Inclusive_Of_Tax</th>
                                </tr>
                            </thead>
                            {
                                items.map((item) => (
                                    <tbody>
                                        <ItemIndividual item={item} />
                                    </tbody>
                                ))
                            }
                        </table>
                    </div> */}
                </div> :
                <div className="products">
                    <img src="https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg" className='productimage' alt="" />
                    <p className='producttext'>Add Products/Items you sell or purchase to manage your full Stock Inventory.</p>
                    <Link to={ROUTES.ADDITEM} className='add-item-button'>Add Your First Product</Link>
                </div>
            }

        </>
    )
}
