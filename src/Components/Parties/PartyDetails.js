import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Tab from '../Tab';
import ItemWiseReport from './ItemWiseReport';
import PartyLedger from './PartyLedger';
import PartyProfile from './PartyProfile';
import PartyTransactions from './PartyTransactions';

export default function PartyDetails() {
    const { id } = useParams()
    const location = useLocation()
    const [party, setParty] = useState()
    const [edit, setEdit] = useState(false)

    const tabContent = [
        {
            title: "PartyLedger",
            content: <PartyLedger />
        },
        {
            title: "PartyProfile",
            content: <PartyProfile />
        },
        {
            title: "PartyTransactions",
            content: <PartyTransactions />
        },
        {
            title: "ItemWiseReport",
            content: <ItemWiseReport />
        },
    ]

    console.log(id, party);
    useEffect(() => {
        if (location.state && location.state.party) {

            // const { date, type, invoiceNumber, total, party, itemIds } = location.state?.party

            setParty(location.state.party)

            if (id)
                setEdit(false)
        }
    }, [location.state])

    return (
        <>
            <div>PartyDetails</div>

            <Tab active={1}>
                {
                    tabContent.map((tab, idx) => <Tab.TabPane key={idx} tab={tab.title} >{tab.content} </Tab.TabPane>)
                }
            </Tab>

        </>
    )
}
