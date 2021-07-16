import React from 'react'
import { useState, useEffect } from 'react';

import '../../CSS/MyResponses.css'

const ResponseBar = () => {

    const [containerCSS, setContainerCSS] = useState(null);


    const quizName = 'This user quiz 1';
    const creator = 'thisuser';
    const timeSubmitted = new Date();

    const colors = ['#45B29D', '#334D5C', '#A1D044', '#EFC94C', '#E27A3F', '#DF4949', '#646464', '#0B0B0B'];

    useEffect(() =>
    {
       setContainerCSS({
        backgroundColor : colors[Math.floor(Math.random() * 8)]
       })
    }, [])

    return (
        <div className="response-bar-container" style={containerCSS}>
            <h3 className='quiz-name-my-responses'>{quizName}</h3>
            <h3 className='creator-my-responses'>{'by ' + creator}</h3>
            <h3 className='time-submitted-my-responses'>{'Submitted : ' + timeSubmitted.toDateString()}</h3>
        </div>
    )
}

export default ResponseBar
