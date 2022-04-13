import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const SummaryAnswers = ({ questions, answers, onSubmit }) => {
    return (
        <div className='container'>
            {questions.map((question, i) => {
                return (answers[i] !== -1) ? <ul key={i}>{question.text} : {question.options[answers[i]].text}</ul> : <p>{question.text}: Sin respuesta</p>
            }
            )}
            <Button variant="contained" onClick={onSubmit}>Send Quiz</Button>
        </div>
    )
}

SummaryAnswers.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.array,
    onSubmit: PropTypes.func
}

export default SummaryAnswers