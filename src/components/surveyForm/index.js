import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Formik } from 'formik';

const SurveyForm = ({ nextQuestion, onSubmit, questions, currentQuestion }) => {
    return (
        <Container>
            <Formik
                initialValues={{ answer: -1 }}
                onSubmit={(values) => {
                    onSubmit(values.answer);
                }}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Container>
                            <FormControl>
                                <FormLabel id={`answers-label`}>{questions[currentQuestion].text}</FormLabel>
                                <RadioGroup
                                    name={`answers-group`}
                                >
                                    {questions[currentQuestion].options.map((option, j) => <FormControlLabel key={j} control={<Radio name='answer' value={j} checked={values.answer == j} onChange={handleChange} />} label={option.text} />)}
                                </RadioGroup>
                            </FormControl>
                        </Container>
                        <Button variant="contained" onClick={() => { nextQuestion(values.answer); setFieldValue('answer', -1) }} disabled={currentQuestion == questions.length - 1}>Next question</Button>
                        <Button variant="contained" type='submit'>Submit</Button>
                    </form>
                )}
            </Formik>
        </Container>
    )
}

SurveyForm.propTypes = {
    nextQuestion: PropTypes.func,
    onSubmit: PropTypes.func,
    questions: PropTypes.array,
    currentQuestion: PropTypes.number
}

export default SurveyForm