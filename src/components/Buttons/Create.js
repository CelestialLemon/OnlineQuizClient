import React from 'react'

import '../../CSS/Home.css'

import { AiOutlineFileAdd } from 'react-icons/ai'
import { useHistory } from 'react-router'

const Create = () => {

    let history = useHistory();
    const onCreateClick = () =>
    {
        history.push('/quiz/create');
    }

    return (
        <div className='create-button' onClick={onCreateClick}>
            <AiOutlineFileAdd className='create-icon'></AiOutlineFileAdd>
           <h3 className='text'>Create</h3>
        </div>
    )
}

export default Create
