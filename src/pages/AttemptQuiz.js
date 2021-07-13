import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Question from '../components/Question';

import '../CSS/AttemptQuiz.css'

const AttemptQuiz = () => {
    
    const { id } = useParams();
    const [quizData, setQuizData] = useState(null);
    const [quizJSX, setQuizJSX] = useState([]);
    const [answers, setAnswers] = useState([]);
    console.log(id);

    const FetchQuizData = async () =>
    {
        try
        {
            const res = await axios.get('http://localhost:4000/quiz/attempt/'+ id,
            {
                'headers' : {'authorization' : "Bearer " + (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken'))},
            })
            setQuizData(res.data);
            console.log(res.data);
        }catch(err)
        {
            console.log(err);
        }
    }

    const renderQuiz = () =>
    {
        if(quizData)
        {
            const temp = [];
            for(var i=0; i<quizData.questions.length; i++)
            {
                const index = i;
                temp.push(
                    <Question 
                    questionHeader={quizData.questions[index].questionHeader}
                    option1 = {quizData.questions[index].option1}
                    option2 = {quizData.questions[index].option2}
                    option3 = {quizData.questions[index].option3}
                    option4 = {quizData.questions[index].option4}
                    index={index}
                    onAnswerSelect={onAnswerSelect}
                    key={index}></Question>
                )
            }

            setQuizJSX(temp);
        }
    }

    const InitializeAnswerArray = () =>
    {
        if(quizData)
        {
            const temp = [];
            for(var i=0; i<quizData.questions.length; i++)
            {
                temp.push('');
            }
            setAnswers(temp);
        }
    }

    const onAnswerSelect = (optionSelected, questionIndex) =>
    {
        const temp = answers;
        temp[questionIndex] = optionSelected;
        setAnswers(temp);
    }

    const onSubmitClick = async () =>
    {
        try
        {
            console.log(answers);
            const res = await axios.post('http://localhost:4000/quiz/submit/' + id,
            {
                'answers' : answers
            },
            {
                'headers' : {'authorization' : 'Bearer ' + (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken'))}
            })
        }catch(err)
        {
            console.log(err)
        }
    }

    useEffect(() =>
    {
        renderQuiz();
    }, [quizData])

    useEffect(() =>
    {
        FetchQuizData();
        InitializeAnswerArray();
    }, []);
    
    if(quizData)
    return (
        <div className='page-container'>
            <div className='header'>
                <h3 className='attempt-quiz-name'>{quizData.quizName}</h3>
                <h3 className='attempt-quiz-creator'>{'Creator : ' + quizData.creator}</h3>
                <h3 className='attempt-quiz-description'>{quizData.description}</h3>
            </div>
            <div>
                {quizJSX}
            </div>
            <button className='btn btn-outline-danger submit-button' onClick={onSubmitClick}>Submit</button>
        </div>
    )
    else
    return (<h3>Loading</h3>)
}

export default AttemptQuiz
