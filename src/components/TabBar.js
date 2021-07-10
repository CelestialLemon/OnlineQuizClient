import React from 'react'
import { useState, useEffect } from 'react'

import '../CSS/Home.css'

import TabButton from './Buttons/TabButton'

const TabBar = () => {

    const [activeButton, setActiveButton] = useState('My Quizes');

    const activeButtonCSS = {
        background : 'rgb(116, 116, 116)',
        color : 'white',
        border : 'rgb(116, 116, 116) solid 1px',
    }

    const onActiveButtonChange = (currentActiveState) =>
    {
        console.log(currentActiveState);
        setActiveButton(currentActiveState);
    }

    const inactiveButtonCSS = {
        color : 'rgb(116, 116, 116)',
        border : '1px solid rgb(116, 116, 116)'
       
    }
    return (
        <div>
            <div className='tab-bar'>
                {activeButton == "My Quizes" ?
                <TabButton buttonCSS={activeButtonCSS} buttonName='My Quizes' onClick={onActiveButtonChange}></TabButton> :
                <TabButton buttonCSS={inactiveButtonCSS} buttonName='My Quizes' onClick={onActiveButtonChange}></TabButton>}
                {activeButton == "My Responses" ?
                <TabButton buttonCSS={activeButtonCSS} buttonName='My Responses' onClick={onActiveButtonChange}></TabButton> :
                <TabButton buttonCSS={inactiveButtonCSS} buttonName='My Responses' onClick={onActiveButtonChange}></TabButton>}
            </div>
        </div>
    )
}

export default TabBar
