import React from 'react'
import { Navigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar'
import * as ROUTES from '../constants/routes';

export default function Dashboard({ user: loggedInUser }) {


    if (!loggedInUser) return <Navigate to={ROUTES.LOGIN} />
    return (
        <div className="container bigger-flex">
            <Sidebar />

        </div>
    )
}
