import React, { useState } from 'react'
import * as XLSX from 'xlsx'

export default function ImportItem() {
    const [excelData, setExcelData] = useState(null);
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    const fileType = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', '.csv', ''];

    const handleInputData = (rdata) => {
        if (rdata !== null) {
            const workbook = XLSX.read(rdata, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            setExcelData(data);
        }
        else {
            setExcelData(null);
        }
    }

    const handleFileUpload = (e) => {
        e.preventDefault();
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log(selectedFile, selectedFile.type);
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                    handleInputData(e.target.result);
                }
            }
            else {
                setExcelFileError('Please select only excel file types');
                setExcelFile(null);
            }
        }
        else {
            console.log('plz select your file');
        }
    }

    console.log(excelFile, excelFileError, excelData);

    return (
        <>
            <div className='importitem'>
                <div className='importitem--heading'>Import Items</div>
                <div className='importitem--left'>

                </div>
                <div className='importitem--right'>
                    <div className='importitem--right'>
                        <div className='importitem--right__heading'>
                            Upload your .xls/ .xlsx (excel sheet)
                        </div>
                        <div className='importitem--box'>
                            <div>icon</div>
                            <h5>Drag & Drop files here</h5>
                            <h6>or</h6>
                            <input onChange={handleFileUpload} accept=".xlsx, .xls, .csv" type='file' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item Code</th>
                            <th>HNS</th>
                            <th>Sale Price</th>
                            <th>Purchase Price</th>
                            <th>Discount Type</th>
                            <th>Sale Discount</th>
                            <th>Opening Stock</th>
                            <th>Minimum_stock_quantity</th>
                        </tr>
                    </thead>
                    {excelData !== null && (<tbody>
                        {excelData.map((item) => (
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
                        ))}
                    </tbody>
                    )}
                </table>
            </div>
        </>
    )
}
