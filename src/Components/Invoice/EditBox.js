import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditBox({ name, title, setEdit }) {
    const navigate = useNavigate()
    return (
        <div className='editbox'>
            <div className='editbox__left'>
                <i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left editbox--back"></i>
                <div className='editbox--title'>{title}{name}</div>
            </div>
            <div className='editbox__right'>
                <button className='btn btn--secondary' onClick={() => setEdit(true)}>Edit</button>
                <button className='btn btn--error'>Delete</button>
            </div>
        </div>
    )
}
