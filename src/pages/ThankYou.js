import React from 'react'
import { useHistory } from 'react-router'


import '../CSS/ThankYou.css'
import { AiFillHome } from 'react-icons/ai'

const ThankYou = () => {

    let history = useHistory();
    const onGoToHomeClick = () =>
    {
        history.push('/');
    }
    return (
        <div className='page-container-thank-you'>
            <div className='header'>
                <h3 className='submitted-successfully'>Submitted Successfully</h3>     
                <h3 className='thank-you'>Thank You for attempting this quiz...</h3>     
            </div>
            <div>
            <button className='btn btn-outline-primary go-to-home-button'
            onClick={onGoToHomeClick}>
                <AiFillHome className='icon'></AiFillHome>
                Go To Home</button>
            </div>
        </div>
    )
}

export default ThankYou
