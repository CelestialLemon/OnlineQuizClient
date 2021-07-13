import React from 'react'
import { useState, useEffect } from 'react';

const QuestionInput = ({onChange, index}) => {

    
    const [questionHeader, setQuestionHeader] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    useEffect(() =>
    {
        onChange({
            'questionHeader' : questionHeader,
                'option1' : option1,
                'option2' : option2,
                'option3' : option3,
                'option4' : option4
        }, index);
    }, [questionHeader, option1, option2, option3, option4])

    return (
        <div className='question-container'>
           <div className='question-header-input'>
           <h3>Q. </h3>
           <textarea type='text' onChange={e => setQuestionHeader(e.target.value)}></textarea>
           </div>
           <h3>Options</h3>
           
            <div className='options-list-input'>
            
                <div className='option-container-input'>
                    <input 
                    type='radio' name='option' className='option-radio-button'>
                    </input>
                    <textarea 
                    className='option-label' onChange={e => setOption1(e.target.value)}>
                        </textarea>
                </div>
                <div className='option-container-input'>
                    <input 
                    type='radio' name='option' className='option-radio-button'>
                    </input>
                    <textarea 
                    className='option-label' onChange={e => setOption2(e.target.value)}>
                        </textarea>
                </div>
                <div className='option-container-input'>
                    <input 
                    type='radio' name='option' className='option-radio-button'>
                    </input>
                    <textarea 
                    className='option-label'onChange={e => setOption3(e.target.value)}>
                        </textarea>
                </div>
                <div className='option-container-input'>
                    <input 
                    type='radio' name='option' className='option-radio-button'>
                    </input>
                    <textarea 
                    className='option-label' onChange={e => setOption4(e.target.value)}>
                        </textarea>
                </div>

            </div>
        </div>
    )
}

export default QuestionInput
