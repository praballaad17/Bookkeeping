import React from "react";
import { useInvoice } from "../../Context/invoiceContext";

export default function ItemSearchBox({ items, setItemInput, index, onClose }) {
  const { setItemToList } = useInvoice();
  const handleSelect = (item) => {
    setItemToList(item, index);
    onClose();
  };

  return (
    <table className="invoice__item--search__table">
      <thead>
        <tr>
          <th className="invoice__item--search__table--name">Add Item</th>
          <th>Sale Price</th>
          <th>Purchase Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {items && items.length ? (
          items.map((item) => (
            <tr key={item._id} onClick={() => handleSelect(item)}>
              <td>{item.name}</td>
              <td>{item.salePrice}</td>
              <td>{item.purchasePrice}</td>
              <td>{item.openigStockQuantity}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
