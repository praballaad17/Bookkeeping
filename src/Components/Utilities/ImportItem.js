import React, { useState } from 'react'
import * as XLSX from 'xlsx'
import ItemIndividual from './ItemIndividual';
import ItemTable from './ItemTable';
import sample from '../../utilities/sample1.xlsx';

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
        // setLoading(true);
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log(selectedFile, selectedFile.type);
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    // setExcelFileError(null);
                    // setExcelFile(e.target.result);
                    // handleInputData(e.target.result);
                    const rdata = (e.target.result)
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
                // setLoading(false); 
            }
            else {
                // setExcelFileError('Please select only excel file types');
                // setExcelFile(null); 
            }

        }
        else {
            console.log('plz select your file');
        }

    }

    console.log(excelData);

    if (excelData) return (
        <ItemTable excelData={excelData} />
    )

    return (
        <>
            <div className='importitem'>
                <div className='importitem--heading'>Import Items From Excel File</div>


                <div className='importitem__block'>
                    <div className='importitem--left'>
                        <h3>Steps to import</h3>
                        <h4>STEP 1</h4>
                        <span>Create an Excel file with the following format.</span>
                        <a href={sample} className='btn btn--primary'>
                            Download Sample
                        </a>
                        <img src="https://exceltable.com/en/analyses-reports/images/analyses-reports29-1.png" alt="sample photo" />
                        <h4>STEP 2</h4>
                        <span><i class="fa fa-upload" aria-hidden="true"></i>Upload the file (xlsx or xls) by clicking on the Upload File button below.</span>
                        <h4>STEP 3</h4>
                        <span>Verify the items from the file & complete the import.</span>
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
