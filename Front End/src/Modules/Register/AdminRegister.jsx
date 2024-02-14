import React, { useState } from "react";
import StylesR from "../../css/register.module.css";

export function AdminRegister(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [role, setRole] = useState('');
    //const [showRegister, setShowRegister] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, dob);
    };

    const handleClose = () => {
        window.location.reload();// Close the register form
    };

    return (
        <div className={StylesR['auth-form-container']}>
            <span className={StylesR['close-button']} onClick={handleClose}>X</span>
            <h2>Register Admin</h2>
            <form className={StylesR['register-form']} onSubmit={handleSubmit}>
                <label htmlFor={StylesR['name']}>Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id={StylesR['name']} placeholder="Full Name" />
                <label htmlFor={StylesR['email']}>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id={StylesR['email']} name="email" />
                <label htmlFor={StylesR['password']}>Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id={StylesR['password']} name="password" />
                <label htmlFor={StylesR['dob']}>Date of Birth</label>
                <input value={dob} onChange={(e) => setDob(e.target.value)} type="date" id={StylesR['dob']} name="dob" />
                <label htmlFor={StylesR['role']}>Role</label>
                <input value={role} onChange={(e) => setRole(e.target.value)} type="text" placeholder="Admin/Member" id={StylesR['role']} name="role" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default AdminRegister;
