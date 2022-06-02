import React from 'react'

export default function ItemSearchBox({ items }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Add Item</th>
                    <th>Sale Price</th>
                    <th>Purchase Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map((item) => (
                        <tr>
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
