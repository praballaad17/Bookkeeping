import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useUser } from "../../Context/userContext";
import { getItemsByUserId } from "../../services/ItemServices";
import ItemIndividual from "./ItemIndividual";
import ItemList from "./ItemList";
// import "../css/item.css";

export default function Item() {
  const { user } = useUser();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemArray = await getItemsByUserId(user?.id, 10, 1);
        console.log(itemArray);
        setItems(itemArray);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);

  return (
    <>
      {items && items !== null ? (
        <div className="items">
          <div className="item__heading">Items</div>
          <div className="items__box">
            <div className="items__box--left">
              <div className="searchbox">
                <i className="fa-solid fa-magnifying-glass searchicon"></i>
                <input
                  type="search"
                  className="searchbar"
                  id="searchitem"
                  name="searchitem"
                />
              </div>
              <div className="productdetails">
                <table className="importtable__table">
                  <thead className="theadbold">
                    <tr>
                      <th>
                        <i class="fa-solid fa-arrow-up"></i>FULLNAME
                        <i class="fa-solid fa-filter"></i>
                      </th>
                      <th>
                        <i class="fa-solid fa-arrow-up"></i>QUANTITY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>ALOVERA JUICE</td>
                      <td>60<i class="fa-solid fa-ellipsis-vertical"></i></td>
                    </tr>
                    
                    <tr>
                      <td>AMLA CANDY 500G</td>
                      <td>10<i class="fa-solid fa-ellipsis-vertical"></i></td>
                    </tr>
                  </tbody>
                </table>
                {/* <ItemList items={items} /> */}
              </div>
            </div>
            <div className="items__box--right">
              <div className="items__box--right__upper">
                <span className="boldspan">BUNDLES</span>
                <button className=" items__box--right__upper--button ">
                  Add Conversion
                </button>
                <div className="spanrightupper">
                  <span>
                    SALE PRICE: <span className="price"> ₹100.00 </span>(exc)
                  </span>
                  <span>
                    PURCHASE PRICE: <span className="price"> ₹100.00 </span>
                    (exc)
                  </span>
                  <span>
                    STOCK QUANTITY: <span className="price"> ₹100.00 </span>
                    (exc)
                  </span>
                  <span>
                    STOCK VALUE: <span className="price"> ₹100.00 </span>(exc)
                  </span>
                </div>
              </div>
              <div className="items__box--right__lower">
                <div className="items__box--right__lower__uppers">
                  <span>TRANSACTION</span>
                  <input
                    type="search"
                    className=" items__box--right__lower--search "
                  />
                </div>
                <div className="item__list">
                  <table className="importtable__table">
                    <thead>
                      <tr>
                        <th>
                          <i class="fa-solid fa-arrow-up"></i>Type
                          <i class="fa-solid fa-filter"></i>
                        </th>
                        <th>
                          <i class="fa-solid fa-arrow-up"></i>Date
                          <i class="fa-solid fa-filter"></i>
                        </th>
                        <th>
                          <i class="fa-solid fa-arrow-up"></i>Quantity
                          <i class="fa-solid fa-filter"></i>
                        </th>
                        <th>
                          <i class="fa-solid fa-arrow-up"></i>Date
                          <i class="fa-solid fa-filter"></i>
                        </th>
                        <th>
                          <i class="fa-solid fa-arrow-up"></i>Price/Unit
                          <i class="fa-solid fa-filter"></i>
                        </th>
                        <th>
                          <i class="fa-solid fa-arrow-up"></i>Status
                          <i class="fa-solid fa-filter"></i>
                        </th>

                        {/* <th>Item Code</th>
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
                        <th>Inclusive_Of_Tax</th> */}
                      </tr>
                    </thead>
                    {/* {items.map((item) => ( */}
                      <tbody>
                        <tr>
                          <td>Opening Stock</td>
                          <td>Opening Stock</td>
                          <td>01/01/2001</td>
                          <td>100</td>
                          <td>100</td>
                          <td></td>
                        </tr>
                        {/* <ItemIndividual item={item} /> */}
                      </tbody>
                    {/* ))} */}
                  </table>
                </div>
              </div>
              {/* <ItemIndividual /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="products">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/073/073/original/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            className="productimage"
            alt=""
          />
          <p className="producttext">
            Add Products/Items you sell or purchase to manage your full Stock
            Inventory.
          </p>
          <Link to={ROUTES.ADDITEM} className="add-item-button">
            Add Your First Product
          </Link>
        </div>
      )}
    </>
  );
}
