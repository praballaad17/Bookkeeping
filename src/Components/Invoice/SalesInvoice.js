import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

export default function SalesInvoice() {
    return (
        <>
            <div>SalesInvoice</div>
            <Link className='btn btn--tertiary' to={ROUTES.ADDSALESINV} >Add Sales Invoice</Link>
        </>
    )
}
