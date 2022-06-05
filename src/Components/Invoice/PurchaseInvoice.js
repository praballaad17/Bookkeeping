import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import { useUser } from "../../Context/userContext"
import { getPurchaseInvoiceUserId } from '../../services/InvoiceServices';

export default function PurchaseInvoice() {
    const { user } = useUser()
    const [invoice, setInvoice] = useState()


    useEffect(() => {
        const getInvoice = async () => {
            const purchaseInvoice = await getPurchaseInvoiceUserId(user?.id)
            console.log(purchaseInvoice);
            setInvoice(purchaseInvoice)
        }
        getInvoice();
    }, [user])

    const getDate = (d) => {
        const date = new Date(d)
        console.log(date);
        // console.log(date.getDate());
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    return (
        <>
            <div>PurchaseInvoice</div>
            <Link className='btn btn--tertiary' to={ROUTES.ADDPURCHASEINV} >Add Purchase Invoice</Link>
            <div className='purinvoice__head'>

            </div>
            <div className='purinvoice__body'>
                <table className='purinvoice__table item__table'>
                    <thead>
                        <th>#</th>
                        <th>Date</th>
                        <th>Ref No</th>
                        <th>Party Name</th>
                        <th>Catagories Name</th>
                        <th>Type</th>
                        <th>Total</th>
                        <th>Recieve Party</th>
                        <th>Balance</th>
                        <th>Print</th>
                    </thead>
                    <tbody>

                        {
                            invoice && invoice.map((invoice) => (
                                <tr>
                                    <td></td>
                                    <td>{getDate(invoice?.todayDate)}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{invoice?.total}</td>
                                    <td></td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </>
    )
}
