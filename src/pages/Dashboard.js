import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Centerpart from '../Components/Centerpart';
import DetailsModal from '../Components/DetailsModal';
import Sidebar from '../Components/Sidebar'
import Uppernavbar from '../Components/Uppernavbar';
import * as ROUTES from '../constants/routes';

export default function Dashboard({ user: loggedInUser }) {
    const [open, setOpen] = useState(false);


    // if (!loggedInUser) return <Navigate to={ROUTES.LOGIN} />  

    return (
        <div className="container bigger-flex">
            <Sidebar open={open} onClose={()=>{setOpen(true);}}/>
            <DetailsModal open={open} onClose={() => setOpen(false)} />
            <Uppernavbar />
            {/* <Centerpart /> */}
        </div>
    )
}
