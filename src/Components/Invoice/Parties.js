import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes';
import { useUser } from '../../Context/userContext';
import { getPartyByUserId } from '../../services/partyServices';

export default function Parties() {
    const [parties, setParties] = useState([])
    const { user } = useUser()
    useEffect(() => {
        const getParty = async () => {
            try {
                const parties = await getPartyByUserId(user?.id)
                console.log(parties)
                setParties(parties)
            } catch (error) {
                console.log(parties);
            }
        }
        getParty()
    }, [])

    return (
        <>
            <div>PartiesInvoice</div>
            <Link className='btn btn--tertiary' to={ROUTES.ADDPARTIESINV} >Add Parties</Link>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Mobile Number</th>
                    <th>Party Type</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
            </table>
        </>
    )
}
