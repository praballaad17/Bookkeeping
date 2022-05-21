import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import ItemIndividual from './ItemIndividual';

export default function ImportItem() {
    const [excelData, setExcelData] = useState(null);
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
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
                setLoading(false);
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

    if (excelData) return (
        <div className='importitem'>
            <div>
                <div className='importitem--heading'>Import Items</div>
                <table className='importitem__table'>
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
                    {excelData !== null && (
                        <tbody>
                            {excelData.map((item) => (
                                <ItemIndividual item={item} />
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    )

    return (
        <>
            <div className='importitem'>
                <div className='importitem--heading'>Import Items</div>


                <div className='importitem__block'>
                    <div className='importitem--left'>

                    </div>
                    <div className='importitem--right'>
                        <div className='importitem--right__heading'>
                            Upload your <span>.xls/ .xlsx (excel sheet)</span>
                        </div>
                        <div className="drop-file-input ">
                            {!loading ? <div className='importitem--box'>
                                <i class="fa-solid fa-cloud-arrow-up"></i>
                                <h5>Drag & Drop file here</h5>
                                {/* <h6>or</h6> */}
                                <input onChange={handleFileUpload} accept=".xlsx, .xls, .csv" type='file' />
                            </div> :
                                <div>
                                    ...loading
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
