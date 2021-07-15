import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import QuestionInput from '../components/QuestionInput';

import '../CSS/CreateQuiz.css'

const CreateQuiz = () => {

    let history = useHistory();

    const [questionsJSX, setQuestionsJSX] = useState([]);
    const [quizName, setQuizName] = useState('');
    const [description, setDescription] = useState('');
    const [questions, setQuestions] = useState([]);
    const [updateState, setUpdateState] = useState(0);

    const onAddQuestion = () =>
    {

        const temp = questionsJSX;
        const index = temp.length;
        temp.push(<QuestionInput 
            className='question' index={index} onChange={handleChange} key={index}>
            </QuestionInput>);
        setQuestionsJSX(temp);

        const temp2 = questions;
        temp2.push(
            {
                'questionHeader' : '',
                'option1' : '',
                'option2' : '',
                'option3' : '',
                'option4' : ''
            }
        )
        setQuestions(temp2);
        setUpdateState(updateState + 1);
    }

    const handleChange = (updatedQuestion, indexofUpdated) =>
    {
        const temp = questions;
        temp.forEach((question, index) =>
        {
            if(index == indexofUpdated)
            {
                question.questionHeader = updatedQuestion.questionHeader;
                question.option1 = updatedQuestion.option1;
                question.option2 = updatedQuestion.option2;
                question.option3 = updatedQuestion.option3;
                question.option4 = updatedQuestion.option4;
            }
        })
        setQuestions(temp);
    }

    const onClickCreateQuiz = async () =>
    {
        try
        {
            const res = await axios.post("http://localhost:4000/quiz/add",
             {
                'quizName' : quizName,
                'description' : description,
                'questions' : questions
             },
            {'headers': {'authorization' : 'Bearer ' + localStorage.getItem("accessToken")}});

            console.log(res.data);
            if(res.data.msg == 'New Quiz created')
            {
                history.push('/quiz/create/' + res.data._id + '/created');
            }
        }catch(err)
        {
            console.log(err);
        }
    }



    return (
        <div className='create-quiz-page-container'>
            <div className='quiz-name'>
                <label>Quiz Name</label>
                <input type='text' onChange={e => setQuizName(e.target.value)}></input>
            </div>
            <div className='description'>
                <label>Description</label>
                <textarea onChange={e => setDescription(e.target.value)}></textarea>
            </div>
            <div className='questions'>
            {questionsJSX}
            </div>
            <button className='add-question-button' onClick={onAddQuestion}>+ Add Question</button>
            <button className='add-question-button' onClick={onClickCreateQuiz}>Create Quiz</button>
            
        </div>
    )
}

export default CreateQuiz
