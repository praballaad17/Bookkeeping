import React from 'react'

export default function ItemIndividual({ selectedItem }) {

    console.log(selectedItem);
    return (
        <>
            <div className="items__box--right__upper">
                <span className="boldspan">{selectedItem?.name}</span>
                <button className=" items__box--right__upper--button addconversion">
                    Add Conversion
                </button>
                <div className="spanrightupper">
                    <span>
                        SALE PRICE: <span className="price"> ₹{selectedItem?.salePrice} </span>(exc)
                    </span>
                    <span>
                        PURCHASE PRICE: <span className="price"> ₹{selectedItem?.purchasePrice} </span>
                        (exc)
                    </span>
                    <span>
                        STOCK QUANTITY: <span className="price"> {selectedItem?.openigStockQuantity} </span>
                        (exc)
                    </span>
                    <span>
                        STOCK VALUE: <span className="price"> ₹{selectedItem ? 0 : selectedItem?.openigStockQuantity * selectedItem?.purchasePrice} </span>(exc)
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
        </>
    )
}
