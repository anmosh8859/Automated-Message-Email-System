import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; // Example icons for email and password
import Stylesl from "../../css/login.module.css";
import { useAuth } from "../security/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {

    const authContext = useAuth()

    const [username, setUsername] = useState('anand@123');
    const [password, setPassword] = useState('mamta@123');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await authContext.login({username, password});
        navigate('/superAdmin')
    }

    return (
        <div className={Stylesl['auth-form-container']}>
            <h2>Login</h2>
            <form className={Stylesl['login-form']}>
                <label htmlFor="email">
                    <FontAwesomeIcon icon={faEnvelope} /> Email
                </label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">
                    <FontAwesomeIcon icon={faLock} /> Password
                </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={handleSubmit}>Log In</button>
            </form>
        </div>
    )
}

export default Login;
