import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect,useState} from 'react'
import ReactDom from 'react-dom'

export default function DetailsModal({ open, onClose }) {
    // useEffect(() => {
    //     document.querySelector(".progress__bar").style.width = progress
    // }, [progress])
    // {!open ? return(  ) : return <></>}
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className="modal-layout" ></div>
            {/* <div className="modal-layout" ></div> */}
            <div className="modal-box" >                
                <div className="modal-box__head">
                    <div className='modal-box__head--left'>
                        Edit Firm hello
                    </div>
                    <div className='modal-box__head--right'>
                        <i class="fa-solid fa-xmark" onClick={onClose}></i>
                    </div>
                </div>
                <ul className="modal-box__list">
                    <li className="progress__box">
                        <span class="progress-bar"></span>
                    </li>
                    {/* <li className="modal-box__item" >{progress}</li> */}
                </ul>
            </div>
        </>,
        document.getElementById("modal")
    )
}
