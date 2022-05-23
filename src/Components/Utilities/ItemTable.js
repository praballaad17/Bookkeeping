import React, { useEffect, useState } from 'react'
import ItemIndividual from './ItemIndividual'

export default function ItemTable({ excelData }) {
    const [uniqueItems, setUniqueItems] = useState([]);

    useEffect(() => {
        // excelData.map((item) => {
        //     console.log(item);
        // })

        const uniqueItems = [...excelData.reduce((map, obj) => map.set(obj.Item_code, obj), new Map()).values()]
        setUniqueItems(uniqueItems);
        console.log(uniqueItems);
    }, [])
    console.log(uniqueItems);

    return (
        <div className='importtable'>
            <div className='importtable--heading heading-secondary'>Import Items</div>
            <div className='importtable--box'>
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
                    {uniqueItems !== null && (
                        <tbody>
                            {uniqueItems.map((item) => (
                                <ItemIndividual item={item} />
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
            <div className='importtable__foot'>
                <div className='btn btn--error importtable__foot--btn'>See Items with error</div>
                <div className='btn btn--primary importtable__foot--btn'>Import {uniqueItems.length} Valid Items</div>
            </div>
        </div>
    )
}
