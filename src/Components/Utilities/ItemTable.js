import React, { useEffect, useState } from 'react'
import { useUser } from '../../Context/userContext';
import { importItemBulk } from '../../services/ItemServices';
import ErrorItemTable from './ErrorItemTable';
import ItemIndividual from './ItemIndividual'

export default function ItemTable({ excelData }) {
    const [uniqueItems, setUniqueItems] = useState();
    const [errorItems, setErrorItems] = useState([]);
    const [open, setOpen] = useState(false);

    const { user } = useUser();

    console.log(user);

    useEffect(() => {
        let uniqueItems = {};
        let errorItems = []
        excelData.map((item) => {
            if (uniqueItems.hasOwnProperty(item.Item_code)) {
                errorItems = [...errorItems, { ...item, error: `An Item is already present with item code ${item.Item_code}.` }]
            }
            else {
                uniqueItems[item.Item_code] = item;
            }
        })


        setErrorItems(errorItems)
        setUniqueItems(Object.values(uniqueItems));
    }, [excelData])

    const handleImport = async () => {
        try {
            const response = await importItemBulk(uniqueItems, user.id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
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
                        {uniqueItems && uniqueItems !== null && (
                            <tbody>
                                {uniqueItems.map((item) => (
                                    <ItemIndividual item={item} />
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
                <div className='importtable__foot'>
                    <div className='btn btn--error importtable__foot--btn' onClick={() => setOpen(true)}>See {errorItems?.length} Items with error</div>
                    <div className='btn btn--primary importtable__foot--btn' onClick={handleImport}>Import {uniqueItems?.length} Valid Items</div>
                </div>
            </div>
            <ErrorItemTable errorItems={errorItems} open={open} onClose={() => setOpen(false)} />
        </div>
    )
}
