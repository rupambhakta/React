import React from 'react'
import { useState, useContext } from 'react';
import UserContect from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContect)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username'
                type="text" />
            {" "}
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                type="password" />
            <button
                onClick={handleSubmit}
            >Submit</button>
        </div>
    )
}

export default Login
