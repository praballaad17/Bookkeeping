import React from 'react'

export default function ItemSearchBox({ items, setItemInput, index, onClose }) {

    const handleSelect = (item) => {
        console.log(item);
        setItemInput(item, index)
        onClose();
    }


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
                {items && items.map((item) => (
                    <tr onClick={() => handleSelect(item)}>
                        <td>{item.name}</td>
                        <td>{item.salePrice}</td>
                        <td>{item.purchasePrice}</td>
                        <td>{item.openigStockQuantity}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    )
}
