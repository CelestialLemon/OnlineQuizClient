import React from 'react'

import '../../CSS/Home.css'

const TabButton = ({buttonName, buttonCSS, onClick}) => {
    return (
        <button style={buttonCSS} className='tab-bar-button' onClick={() => onClick(buttonName)}>{buttonName}</button>
    )
}

export default TabButton
