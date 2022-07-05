import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteInvoice } from '../../services/InvoiceServices'

export default function EditBox({ id, name, title, setEdit }) {
    const navigate = useNavigate()
    console.log(id);
    const HandleDelete = () => {
        deleteInvoice(id).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
            alert("Error: Invoice not deleted")
        }).finally(() => {
            window.location = "/sales/";
        })
    }
    return (
        <div className='editbox'>
            <div className='editbox__left'>
                <i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left editbox--back"></i>
                <div className='editbox--title'>{title}{name}</div>
            </div>
            <div className='editbox__right'>
                <button className='btn btn--secondary' onClick={() => setEdit(true)}>Edit</button>
                <button className='btn btn--error' onClick={HandleDelete} >Delete</button>
            </div>
        </div>
    )
}
