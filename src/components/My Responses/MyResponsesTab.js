import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

import '../../CSS/MyResponses.css'
import ResponseBlock from './ResponseBlock';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsList, BsGrid3X3 } from 'react-icons/bs'
import ResponseBar from './ResponseBar';

const MyResponsesTab = () => {

    const [tooltipMsg, setTooltipMsg] = useState('Click to toogle layout');
    const [currentLayout, setCurrentLayout] = useState('grid');
    const [responseBlocksData, setReponseBlocksData] = useState(null);
    const [responseBlocksJSX, setResponseBlocksJSX] = useState([]);
    const [myResponseContainerCSS, setMyResponsesContainerCSS] = useState({
        'height' : "auto"
    })

    const FetchMyResponsesData = async () =>
    {
        try
        {
            const res = await axios.get('http://localhost:4000/response/myresponses',
            {
                'headers' : {'authorization' : 'Bearer ' + (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken'))}
            });

            console.log(res.data);
            setReponseBlocksData(res.data);
        }catch(err)
        {
            console.log(err);
        }
    }

    const RenderResponses = () =>
    {
        if(responseBlocksData)
        {
            const temp = [];
            //inverse loop to make the newest reponse appear first
            if(currentLayout == 'grid')
            {
                for(var i=responseBlocksData.length - 1; i>-1; i--)
                {
                    const index = i;
                    temp.push(<ResponseBlock
                    quizName={responseBlocksData[index].quizName}
                    creator={responseBlocksData[index].creator}
                    timeSubmitted={responseBlocksData[index].timeSubmitted}
                    key={index}
                    ></ResponseBlock>)
                }

                setMyResponsesContainerCSS({
                    height : '500px'
                })
            }
            else if(currentLayout == 'list')
            {
                for(var i=responseBlocksData.length - 1; i>-1; i--)
                {
                    const index = i;
                    temp.push(<ResponseBar
                    quizName={responseBlocksData[index].quizName}
                    creator={responseBlocksData[index].creator}
                    timeSubmitted={responseBlocksData[index].timeSubmitted}
                    key={index}
                    ></ResponseBar>)
                }

                setMyResponsesContainerCSS({
                    height :  (70 * responseBlocksData.length) > 500 ? '500px' : (70 * responseBlocksData.length) + 'px'
                })
            }
            setResponseBlocksJSX(temp);
        }
        
    }
    
    const ToogleLayout = () =>
    {
        if(currentLayout == 'grid')
        setCurrentLayout('list');
        else if(currentLayout == 'list')
        setCurrentLayout('grid');
    } 

    useEffect(() =>
    {
        FetchMyResponsesData();
    }, []);

    useEffect(() =>
    {
        RenderResponses();
    }, [responseBlocksData, currentLayout])

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {tooltipMsg}
        </Tooltip>
      );

    return (
        <div className='my-responses-tab-container'>
            {currentLayout == 'grid' ?
                <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                >
                    <BsGrid3X3 className='layout-icon' onClick={ToogleLayout}></BsGrid3X3>
                </OverlayTrigger> :
                <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
                >
                    <BsList className='layout-icon' onClick={ToogleLayout}></BsList>
                </OverlayTrigger>}
            
            <div className='my-responses-gird-container' style={myResponseContainerCSS}>
                {responseBlocksJSX}
            </div>
        </div>
    )
}

export default MyResponsesTab
