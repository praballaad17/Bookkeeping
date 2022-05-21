import React from 'react'

export default function ItemIndividual({ item }) {
    return (
        <tr key={item.Item_code}>
            <th>{item.Item_name}</th>
            <th>{item.Item_code}</th>
            <th>{item.hns}</th>
            <th>{item.Sale_price}</th>
            <th>{item.Purchase_price}</th>
            <th>{item.Discount_Type}</th>
            <th>{item.Sale_Discount}</th>
            <th>{item.Opening_stock_quantity}</th>
            <th>{item.Minimum_stock_quantity}</th>
        </tr>
    )
}
