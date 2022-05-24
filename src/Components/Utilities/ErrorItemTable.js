import React from 'react'
import ReactDom from "react-dom";
import ItemIndividual from './ItemIndividual';

export default function ErrorItemTable({ open, onClose, errorItems }) {


    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="modal-layout" onClick={onClose} ></div>
            <div className="detailmodal-box">
                <div className='importtable'>
                    <div className="modal-box__head">
                        <div className='importtable--heading heading-secondary'>Items with Error</div>
                        <div className="div-cross">
                            <i className="fa-solid fa-xmark cross" onClick={onClose}></i>
                        </div>
                    </div>
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
                            {errorItems && errorItems !== null && (
                                <tbody>
                                    {errorItems.map((item) => (
                                        <ItemIndividual item={item} />
                                    ))}
                                </tbody>
                            )}
                        </table>
                    </div>
                    <div className='importtable--error'>
                        {errorItems.map(item => (
                            <div className='u-text-red'>Error: {item.error}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
        ,
        document.getElementById("modal")
    );
}


