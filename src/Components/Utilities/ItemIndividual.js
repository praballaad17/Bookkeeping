import React from 'react'

export default function ItemIndividual({ item }) {
    return (
        <tr key={item.Item_code}>
            <td>{item.Item_code}</td>
            <td>{item.Item_name}</td>
            <td>{item.hns}</td>
            <td>{item.Sale_price}</td>
            <td>{item.Purchase_price}</td>
            <td>{item.Discount_Type}</td>
            <td>{item.Sale_Discount}</td>
            <td>{item.Opening_stock_quantity}</td>
            <td>{item.Minimum_stock_quantity}</td>
            <td>{item.Item_Location}</td>
            <td>{item.Tax_Rate}</td>
            <td>{item.Inclusive_Of_Tax}</td>
        </tr>
    )
}
