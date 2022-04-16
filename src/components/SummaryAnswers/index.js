import React from 'react'
import PropTypes from 'prop-types'
import { Button, CircularProgress } from '@mui/material'
import FlexContainer from '../shared/FlexContainer'

const SummaryAnswers = ({ questions, answers, onSubmit, loading }) => {
    return (
        <FlexContainer>
            {questions.map((question, i) => {
                return (answers[i] !== -1) ? <ul key={i}>{question.text} : {question.options[answers[i]].text}</ul> : <p>{question.text}: Sin respuesta</p>
            }
            )}
            <Button variant="contained" onClick={onSubmit} disabled={loading}> {loading && <CircularProgress />}Send Quiz</Button>
        </FlexContainer>
    )
}

SummaryAnswers.propTypes = {
    questions: PropTypes.array,
    answers: PropTypes.array,
    loading: PropTypes.bool,
    onSubmit: PropTypes.func
}

export default SummaryAnswers