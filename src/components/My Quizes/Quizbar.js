import React from 'react'
import { useState, useEffect } from 'react'
import '../../CSS/MyQuizes.css'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap'

import { AiFillDelete, AiOutlineShareAlt,  AiOutlineEye} from 'react-icons/ai'
import { Popover } from 'react-bootstrap'
import axios from 'axios'

const Quizbar = ({quizName, quizIndex, id}) => {

    const [msg, setMsg] = useState('Click to copy link');
    const [isDeleted, setIsDeleted] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    

    const onShareClick = () =>
    {
        navigator.clipboard.writeText('http://localhost:3000/quiz/attempt/' + id);
    }

    const onDeleteClick = async () =>
    {
        try
        {
            const res = await axios.delete('http://localhost:4000/quiz/' + id,
            {
                'headers' : {'authorization' : 'Bearer ' + (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken'))}
            });
            console.log(res.data);
            if(res.data.msg == 'Deleted Successfully')
            {
                setIsDeleted(true);
            }
        }catch(err)
        {
            console.log(err);
        }
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Confirm Delete</Popover.Title>
          <Popover.Content>
            Are you sure you want to delete '{quizName}'?
          </Popover.Content>
          <Button style={{margin : "5px 5px 5px 5px"}} variant="danger" onClick={onDeleteClick}>Delete</Button>
        </Popover>
      );

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {msg}
        </Tooltip>
      );
    
    if(isDeleted == false)
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
        
            <button className='btn btn-outline-success'>
              <AiOutlineEye className='icons'></AiOutlineEye>View Responses</button>

            <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose>
               <button className='btn btn-outline-danger' onClick={() => setIsDeleteModalOpen(true)}>
               <AiFillDelete className='icons'></AiFillDelete>Delete</button>
            </OverlayTrigger>

           </div>
        </div>
    )
    else
    return (<></>)
}

export default Quizbar
