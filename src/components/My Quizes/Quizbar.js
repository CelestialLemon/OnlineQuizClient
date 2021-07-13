import React from 'react'
import { useState, useEffect } from 'react'
import '../../CSS/MyQuizes.css'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'

import { AiFillEdit, AiOutlineLink, AiFillDelete, AiOutlineShareAlt } from 'react-icons/ai'
import axios from 'axios'

const Quizbar = ({quizName, quizIndex, id}) => {

    const [msg, setMsg] = useState('Click to copy link')

    const onShareClick = () =>
    {
        navigator.clipboard.writeText('http://localhost:3000/quiz/attempt/' + id);
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {msg}
        </Tooltip>
      );
    
    return (
        <div className='quizbar-container'>
           <h3 className='sr-no'>{"#" + quizIndex}</h3>
           <h3 style={{paddingLeft : '20px'}}>{quizName}</h3>
           <div className='button-group'>
           <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
           <button className='btn btn-outline-primary' onClick={onShareClick}>
               <AiOutlineShareAlt className='icons'></AiOutlineShareAlt>Share</button>
               </OverlayTrigger>  
           <button className='btn btn-outline-secondary'>
               <AiFillEdit className='icons'></AiFillEdit>Edit</button> 
           <button className='btn btn-outline-danger'>
               <AiFillDelete className='icons'></AiFillDelete>Delete</button>
           
           </div>
        </div>
    )
}

export default Quizbar
