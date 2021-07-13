import React from 'react'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import { Form } from 'react-bootstrap'

import '../CSS/Question.css'

const Question = ({questionHeader, option1, option2, option3, option4, index, onAnswerSelect}) => {

    const [selectedOption, setSelectedOption] = useState('');

    const onSelectedOptionChange = (option) =>
    {
        onAnswerSelect(option, index)
    }

    return (
        <div className='question-container'>
            <h3 className='question-header'>{questionHeader}</h3>
            <h3 style={{fontSize : "20px", marginBottom : "20px"}}>Options:</h3>

            <div className='options-list'>

                <div className='option-container'>
                    <input 
                    type='radio' name={'option' + index} className='option-radio-button' onChange={() => onSelectedOptionChange('option1')}>
                    </input>
                    <label className='option-label'>{option1}</label>
                </div>
                <div className='option-container'>
                    <input
                     type='radio' name={'option' + index} className='option-radio-button' onChange={() => onSelectedOptionChange('option2')}>
                     </input>
                    <label className='option-label'>{option2}</label>
                </div>
                <div className='option-container'>
                    <input
                     type='radio' name={'option' + index} className='option-radio-button' onChange={() => onSelectedOptionChange('option3')}>
                     </input>
                    <label className='option-label'>{option3}</label>
                </div>
                <div className='option-container'>
                    <input
                     type='radio' name={'option' + index} className='option-radio-button' onChange={() => onSelectedOptionChange('option4')}>
                     </input>
                    <label className='option-label'>{option4}</label>
                </div>

            </div>
        </div>
    )
}

export default Question
