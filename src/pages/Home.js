import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import ValidateLocalToken from '../functions/ValidateLocalToken'
import ValidateSessionToken from '../functions/ValidateSessionToken'

import Create from '../components/Buttons/Create'
import Copy from '../components/Buttons/Copy'
import TabBar from '../components/TabBar'

const Home = () => {

    let history = useHistory();

    const ValidateUser = async () =>
    {
        const res = await ValidateLocalToken();
        const sessionRes = await ValidateSessionToken();

        if(res == false && sessionRes == false)
        {
            history.push('/login');
        }
    }

    useEffect(() =>
    {
        ValidateUser();
    }, [])
    return (
        <div>
            <div className='options'>
                <Create></Create>
                <Copy></Copy>
            </div>
            <TabBar></TabBar>
        </div>
    )
}

export default Home
