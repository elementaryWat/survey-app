import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container } from '@mui/material'

const SummaryAnswers = ({ questions, answers, onSubmit }) => {
    return (
        <Container>
            {questions.map((question, i) =>
                <li key={i}>{question.text} : {question.options[answers[i]].text}</li>
            )}
            <Button variant="contained" onClick={onSubmit}>Send Quiz</Button>
        </Container>
    )
}

SummaryAnswers.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.array,
    onSubmit: PropTypes.func
}

export default SummaryAnswers