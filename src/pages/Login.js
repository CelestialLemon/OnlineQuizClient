import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import ValidateLocalToken from '../functions/ValidateLocalToken'
import ValidateSessionToken from '../functions/ValidateSessionToken'

import '../CSS/Signup.css'

const Signup = () => {

    let history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [msg, setMsg] = useState('');
    const [showMsg, setShowMsg] = useState(false);

    const ValidateUser = async () =>
    {
        const res = await ValidateLocalToken();
        const sessionRes = await ValidateSessionToken();

        if(res === true || sessionRes === true)
        {
            history.push("/");
        }
    }

    const onSubmitClick = async () =>
    {
        try
        {
            const res = await axios.post('http://localhost:4000/auth/login',
            {
                "username" : username,
                "password" : password,
                "rememberOnDevice" : rememberMe
            });

            console.log(res.data);

            if(res.data.loggedIn == true)
            {
                console.log(res.data.msg);
                if(res.data.msg === "token created")
                {
                    console.log("accessToken recieved");
                    localStorage.setItem("accessToken", res.data.accessToken);
                }

                if(res.data.msg === "logged In for session")
                {
                    console.log("session token recieved");
                    sessionStorage.setItem("accessToken", res.data.sessionToken);
                }
                
                history.push("/")
            }
            else if(res.data.loggedIn == false)
            {
                console.log(res.data.msg)
            }

        }catch(err)
        {
            console.log(err);
        }
    }

    useEffect(() =>
    {
        ValidateUser();
    }, [])

    return (
        <div className='PageContainer'>
        <div className="signup-container">
            <h3 className="signup-label">LOGIN</h3>
            <div className='form'>
                <div className='input-group'>
                    <label className='username-label'>Username</label>
                    <input 
                    className='username-input' type='text' placeholder="Enter a username"
                    value={username}  onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className='input-group'>
                    <label className='username-label'>Password</label>
                    <input 
                    className='username-input' type='password' placeholder="Enter a password"
                    value={password} onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div className='input-group'>
                    <input className="checkbox" type='checkbox'  checked={rememberMe} onChange={e => setRememberMe(e.target.checked)}></input>
                    <label className='remember-label'>Remember me on this device</label>
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
                    <a className='login-instead' href='/signup'>Signup instead?</a>
                </div>
            </div>
            
        </div>
        </div>
    )
}

export default Signup
