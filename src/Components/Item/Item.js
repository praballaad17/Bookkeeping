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
  const [selectedItem, setSelectedItem] = useState()

  useEffect(() => {
    const getItems = async () => {
      try {
        const itemArray = await getItemsByUserId(user?.id, 30, 1);
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
          <div className="items__head">
            <div className="heading-secondary">Item</div>
            <a className="btn btn--secondary" href={ROUTES.ADDITEM} >Add Item</a>
          </div>
          <div className="items__box">
            <div className="items__box--left">
              <ItemList items={items} setSelectedItem={setSelectedItem} />
            </div>
            <div className="items__box--right">

              <ItemIndividual selectedItem={selectedItem} />
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
