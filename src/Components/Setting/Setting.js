import React from 'react'
import ReactDom from "react-dom";

export default function Setting() {
    return ReactDom.createPortal(
        <div className='setting'>
            setting
        </div>,
        document.getElementById("setting")
    );
}
