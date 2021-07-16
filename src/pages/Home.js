import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'

import ValidateLocalToken from '../functions/ValidateLocalToken'
import ValidateSessionToken from '../functions/ValidateSessionToken'

import Create from '../components/Buttons/Create'
import Copy from '../components/Buttons/Copy'
import TabBar from '../components/TabBar'
import axios from 'axios'
import Quizbar from '../components/My Quizes/Quizbar'
import MyResponsesTab from '../components/My Responses/MyResponsesTab'

const Home = () => {

    let history = useHistory();

    const [currentActiveTab, setCurrentActiveTab] = useState('My Quizes');
    const [myQuizesData, setMyQuizesData] = useState(null);
    const [myQuizesJSX, setMyQuizesJSX] = useState([]);

    const ValidateUser = async () =>
    {
        const res = await ValidateLocalToken();
        const sessionRes = await ValidateSessionToken();

        if(res == false && sessionRes == false)
        {
            history.push('/login');
        }
    }

    const onActiveTabChange = (activeTab) =>
    {
        setCurrentActiveTab(activeTab);
    }

    const setMyQuizesJSXFunction = () =>
    {
        if(myQuizesData)
        {
            const temp = [];
            for(var i=0; i<myQuizesData.length; i++)
            {
                const index = i;
                temp.push(<Quizbar 
                    quizName={myQuizesData[index].quizName} quizIndex={index + 1} key={index} id={myQuizesData[index]._id}>
                    </Quizbar>)
            }

            setMyQuizesJSX(temp);
        }
    }

    const FetchMyQuizes = async () =>
    {
        try
        {
            const res = await axios.get('http://localhost:4000/quiz/myquizes',
            {
                headers : {
                    'authorization' : "Bearer " + (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken'))
                }});
            setMyQuizesData(res.data);
        }catch(err)
        {
            console.log(err);
        }
    }



    useEffect(() =>
    {
        ValidateUser();
        FetchMyQuizes();
    }, [])

    useEffect(() =>
    {
        setMyQuizesJSXFunction();
    }, [myQuizesData])

    return (
        <div>
            <div className='options'>
                <Create></Create>
                <Copy></Copy>
            </div>
            <TabBar onActiveTabChange={onActiveTabChange}></TabBar>
            {currentActiveTab == 'My Quizes' ? 
            <div className='my-quizes'>
                {myQuizesJSX}
                </div> : <></>}
            {currentActiveTab == 'My Responses' ? <MyResponsesTab></MyResponsesTab> : <></>}
        </div>
    )
}

export default Home
