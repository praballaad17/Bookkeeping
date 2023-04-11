import React, { useEffect, useState } from 'react'
import { getPartyTransactions } from '../../services/partyServices'

export default function PartyTransactions({ partyId }) {
    const [transcations, setTransactions] = useState([])

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const transactions = await getPartyTransactions(partyId)
                setTransactions(transactions)
            } catch (error) {

            }
        }
        getTransactions()
    }, [])
    return (
        <>
            <div>PartyTransactions</div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction Type</th>
                        <th>Number</th>
                        <th>Amount</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody>
                    {transcations.map(transcation => (
                        <tr>
                            <td>{transcation.date}</td>
                            <td>{transcation.type}</td>
                            <td>{transcation.invoiceNumber}</td>
                            <td>{transcation.total}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}
