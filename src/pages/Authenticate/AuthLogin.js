import React, { useEffect, useState } from "react";
import "../../css/authenticationstyle.css";
import {DASHBOARD, LOGIN} from '../../constants/routes';
import { login } from '../../services/authenticationServices';
import { Link, Navigate } from "react-router-dom";

const AuthLogin = ({user:User}) => {
  const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true)
        try {
            await login(emailAddress, password);
            setLoading(false)
            window.location = "/"
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
            setLoading(false)
        }
    };

    useEffect(() => {
        document.title = 'Login - Touch';
    }, []);


    if (User) return <Navigate to={DASHBOARD} />

  return (
    <>
      <div className="form-container sign-in-container">
        <form className="auth-form" action="#">
          <h1 className="auth-heading">Sign In</h1>
          <div className="social-container">
            <a href="#" className="social">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="social">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="social">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span className="auth-span">or use your account</span>

          {error && <p className="login__box--error">{error}</p>}
          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
          />
          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
                            value={password}
          />
          <a href="#">Forgot Your Password</a>

          <button disabled={isInvalid}
                            type="submit"
                            className={`auth-btn
            ${isInvalid && 'u-opacity-50'}`}>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1 className="auth-heading">Hello, Friend!</h1>
            <p className="auth-p">
              Enter your details and start journey with us
            </p>
            <button className="ghost" id="signUp">
              <Link to={LOGIN}>
                Sign Up
                </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;
