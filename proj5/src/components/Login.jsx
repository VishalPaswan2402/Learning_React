import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

export default function Login(props) {
    const [username, setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {setUser}=useContext(UserContext);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }

    return (
        <>
            <h1>Login</h1>
            <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='username'></input>
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password'></input>
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
