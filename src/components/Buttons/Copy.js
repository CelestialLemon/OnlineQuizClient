import React from 'react'

import '../../CSS/Home.css'
import { FiCopy } from 'react-icons/fi'

const Create = () => {
    return (
        <div className='copy-button'>
            <FiCopy className='copy-icon'></FiCopy>
           <h3 className='text'>Copy</h3>
        </div>
    )
}

export default Create
