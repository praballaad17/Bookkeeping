import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';

export default function PartiesInvoice() {
    return (
        <>
            <div>PartiesInvoice</div>
            <Link className='btn btn--tertiary' to={ROUTES.ADDPARTIESINV} >Add Parties</Link>
        </>
    )
}
