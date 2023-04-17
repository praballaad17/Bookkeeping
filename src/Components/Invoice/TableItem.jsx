import React, { useEffect, useState } from "react";
import ItemSearchBox from "./ItemSearchBox";
import { searchItem } from "../../services/ItemServices";
import { useInvoice } from "../../Context/invoiceContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function TableItem({ item, isEdit, type, i }) {
  const {
    AddEmptyItem,
    editItemList,
    handleItemRemove,
    setItemListWithItemId,
  } = useInvoice();
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState([]);
  const [index, setIndex] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (typeof item.itemId == "object") {
      const newItem = {
        ...item,
        ...item.itemId,
      };
      setItemListWithItemId(newItem, i);
    } else if (typeof item.itemId == "undefined") {
      console.log(typeof item.itemId);
    }
  }, []);

  useEffect(() => {
    if (type === "sales") {
      setPrice(item.salePrice);
    } else {
      setPrice(item.purchasePrice);
    }
  }, [type, item]);

  const handleSearchQuery = async (e, index) => {
    setOpen(true);
    let itemKey = item;
    itemKey[e.target.name] = e.target.value;
    if (e.target.value === "") {
      setIndex(null);
      setOpen(false);
    } else {
      setIndex(index);
      editItemList(e, index);
      const result = await searchItem(e.target.value);
      setResult(result);
    }
  };

  return (
    <tr className="item-row">
      <td className="title-input invoice__item--index">
        <div disabled={!isEdit} onClick={() => handleItemRemove(i)}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </td>
      <td className="title-input invoice__item--searchbox">
        <input
          readOnly={!isEdit}
          className="itemList-input"
          name="name"
          value={item.name}
          onChange={(e) => handleSearchQuery(e, i)}
        />
        {open && index === i && (
          <div className="invoice__item--search">
            <ItemSearchBox
              onClose={() => setOpen(false)}
              items={result}
              index={i}
              AddEmptyItem={AddEmptyItem}
            />
          </div>
        )}
      </td>
      <td className="title-input">
        <input
          readOnly={!isEdit}
          className="itemList-input"
          name="itemCode"
          value={item.itemCode}
          onChange={(e) => editItemList(e, i)}
        />
      </td>
      <td className="title-input">
        <input
          readOnly={!isEdit}
          className="itemList-input"
          name="unit"
          value={item.unit}
          onChange={(e) => editItemList(e, i)}
        />
      </td>
      <td className="title-input">
        <input
          readOnly={true}
          className="itemList-input"
          name="unit"
          //   value={item.unit}
          value="Box"
          //   onChange={(e) => editItemList(e, i)}
        />
      </td>
      <td className="title-input">
        <input readOnly className="itemList-input" value={price} />
      </td>
      <td className="title-input">
        <input
          readOnly
          className="itemList-input"
          name="itemWiseTax"
          value={`GST-${item?.itemWiseTax}%`}
          onChange={(e) => editItemList(e, i)}
        />
      </td>
      <td className="title-input">
        <input
          readOnly
          className="itemList-input"
          name="taxamount"
          value={
            (item.unit * (parseInt(item.itemWiseTax) * parseInt(price))) / 100
          }
          onChange={(e) => editItemList(e, i)}
        />
      </td>

      <td className="title-input">
        <input
          readOnly
          className="itemList-input"
          name="itemAmount"
          value={
            parseInt(price) * parseInt(item.unit) +
            (parseInt(item.itemWiseTax) * parseInt(price) * item.unit) / 100
          }
          onChange={(e) => editItemList(e, i)}
        />
      </td>
    </tr>
  );
}
