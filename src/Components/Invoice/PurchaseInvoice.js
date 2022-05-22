import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

export default function PurchaseInvoice() {
    return (
        <>
            <div>PurchaseInvoice</div>
            <Link className='btn btn--tertiary' to={ROUTES.ADDPURCHASEINV} >Add Purchase Invoice</Link>


        </>
    )
}
