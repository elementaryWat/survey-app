import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Formik } from 'formik';
import Countdown from '../CountDown';

const SurveyForm = ({ nextQuestion, onFinish, questions, currentQuestion, countdownSeconds }) => {
    const handleOnComplete = (answer) => {
        if (currentQuestion + 1 < questions.length) {
            nextQuestion(answer);
        } else {
            onFinish(answer);
        }
    }

    return (
        <Container>
            <Formik
                initialValues={{ answer: -1 }}
            >
                {({
                    values,
                    handleChange,
                    setFieldValue
                    /* and other goodies */
                }) => (
                    <form>
                        <Container>
                            <Countdown seconds={countdownSeconds} currentQuestion={currentQuestion} onComplete={() => { handleOnComplete(values.answer); setFieldValue('answer', -1) }} />
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
                        <Button variant="contained" onClick={() => onFinish(values.answer)}>Finish Quiz</Button>
                    </form>
                )}
            </Formik>
        </Container>
    )
}

SurveyForm.propTypes = {
    nextQuestion: PropTypes.func,
    onFinish: PropTypes.func,
    questions: PropTypes.array,
    currentQuestion: PropTypes.number,
    countdownSeconds: PropTypes.number,
}

export default SurveyForm