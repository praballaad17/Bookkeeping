import React from 'react'
import { Routes, Route } from 'react-router-dom';
import AuthSignup from './AuthSignup';
import AuthLogin from './AuthLogin';
import { SIGN_UP, LOGIN } from '../../constants/routes';
const Authentication = ({ user: User }) => {
    return (
        <div className="authentication-main">
            <div className="auth-container" id="auth-container">
                <Routes>
                    <Route path={SIGN_UP} element={<AuthSignup user={User}/>}/>
                    <Route path={LOGIN} element={<AuthLogin user={User}/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Authentication