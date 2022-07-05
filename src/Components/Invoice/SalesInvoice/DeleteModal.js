import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDom from "react-dom";

export default function DeleteModal({ open, onClose, deleted }) {

    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <div className="modal-layout" onClick={onClose}></div>
            <div className="modal-box">
                <div className="modal--delete">
                    <div className="modal--delete--icon">
                        <i className="fa-solid fa-circle-xmark"></i>
                    </div>
                    Are you sure you want to Delete?

                    <div className="modal--delete-btn">
                        <button className="btn btn--error" onClick={deleted}>Delete</button>
                        <button className="btn btn--secondary" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("modal")
    );
}

