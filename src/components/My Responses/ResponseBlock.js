import React from 'react'
import { useState, useEffect } from 'react';

import '../../CSS/MyResponses.css'

const ResponseBlock = ({quizName, creator, timeSubmitted}) => {

    const [containerCSS, setContainerCSS] = useState(null);

    timeSubmitted = (new Date(timeSubmitted)).toLocaleTimeString() + ' ' +(new Date(timeSubmitted)).toDateString();

    if(quizName.length > 35)
    quizName = quizName.substring(0, 35) + '...';

    if(creator.length > 12)
    creator = creator.substring(0, 12) + '...';

    const colors = ['#45B29D', '#334D5C', '#A1D044', '#EFC94C', '#E27A3F', '#DF4949', '#646464', '#0B0B0B'];

    // for(var i=0; i<50; i++)
    // {
    //     console.log(Math.floor(Math.random() * 6));
    // }

    useEffect(() =>
    {
       setContainerCSS({
        backgroundColor : colors[Math.floor(Math.random() * 8)]
       })
    }, [])

    /*The code at time submitted html is to remove seconds to be displayed in the ui, as they occupy space and arent necessary */
    return (
        <div>
          <div className='response-block-container' style={containerCSS}>
            <h3 className='quiz-name-my-responses'>{quizName}</h3>
            <h3 className='creator-my-responses'>{'by ' + creator}</h3>
            <h3 className='time-submitted-my-responses'>{'Submitted at : ' + timeSubmitted.substring(0, 5) + timeSubmitted.substring(8, timeSubmitted.length)}</h3>  
        </div>
        </div>
    )
}

export default ResponseBlock
