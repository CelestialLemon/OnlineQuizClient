import React from 'react'

import '../CSS/CreateQuiz.css'

const CreateQuiz = () => {
    return (
        <div className='create-quiz-page-container'>
            <div className='quiz-name'>
                <label>Quiz Name</label>
                <input type='text'></input>
            </div>
            <div className='description'>
                <label>Description</label>
                <textarea></textarea>
            </div>
            <button className='add-question-button'>+ Add Question</button>
        </div>
    )
}

export default CreateQuiz
