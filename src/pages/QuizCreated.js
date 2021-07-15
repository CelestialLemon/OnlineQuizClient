import React from 'react'

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AiOutlineShareAlt, AiFillHome } from 'react-icons/ai';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import '../CSS/QuizCreated.css'

const QuizCreated = () => {

    let history = useHistory();

    const { id } = useParams();

    const tooltipMessage = 'Click to copy link';
    const onShareClick = () =>
    {
        navigator.clipboard.writeText('http://localhost:3000/quiz/attempt/' + id);
    }

    const onGoToHomeClick = () =>
    {
        history.push('/');
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {tooltipMessage}
        </Tooltip>
      );

    return (
        <div className='page-container-quiz-created'>
            <div className='header-quiz-created'>
                <h3 className='label-quiz-created'>Quiz Created!</h3>
                <h3 className='description-quiz-created'>Start by sharing your quiz to others</h3>
            </div>
            <div className='buttons-quiz-created'>
                <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                >
                    <button className='btn btn-outline-primary share-button' onClick={onShareClick}>
                <AiOutlineShareAlt className='icons'></AiOutlineShareAlt>Share</button>
                </OverlayTrigger>
                    <button className='go-to-home-button btn btn-outline-success' onClick={onGoToHomeClick}>
                    <AiFillHome className='icon'></AiFillHome>
                        Go To Home</button>
            </div>
        </div>
    )
}

export default QuizCreated
