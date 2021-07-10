import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import '../CSS/Signup.css'

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [showMsg, setShowMsg] = useState(false);

    const onSubmitClick = async () =>
    {
        try
        {
            const res = await axios.post('http://localhost:4000/auth/signup',
            {
                "username" : username,
                "password" : password
            });

            console.log(res.data);

            if(res.data.msg == "user already exists")
            {
                setShowMsg(true);
                setMsg('User already Exists!');
            }
            else if(res.data.msg == "Signed Up successfully")
            {
                setShowMsg(true)
                setMsg("Signed Up Successfully!");
            }
        }catch(err)
        {
            console.log(err);
        }
    }

    return (
        <div className='PageContainer'>
        <div className="signup-container">
            <h3 className="signup-label">SIGN-UP</h3>
            <div className='form'>
                <div className='input-group'>
                    <label className='username-label'>Username</label>
                    <input 
                    className='username-input' type='text' placeholder="Enter a username"
                    value={username} onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className='input-group'>
                    <label className='username-label'>Password</label>
                    <input 
                    className='username-input' type='password' placeholder="Enter a password"
                    value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className='input-group'>
                    <button className='submit' onClick={onSubmitClick}>SUBMIT</button>
                </div>
                {showMsg && msg == "User already Exists!" ? 
                <div className='input-group'>
                    <h3 className='error-msg'>{msg}</h3>
                </div>
                : <></>}
                {showMsg && msg == "Signed Up Successfully!"? 
                <div className='input-group'>
                    <h3 className='success-msg'>{msg}</h3>
                </div>
                : <></>}
                <div className='input-group'>
                    <a className='login-instead' href='/login'>Login instead?</a>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Signup
