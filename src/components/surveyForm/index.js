import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
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
                    <div className='survey-form'>
                        <Container>
                            <Countdown seconds={countdownSeconds} currentQuestion={currentQuestion} onComplete={() => { handleOnComplete(values.answer); setFieldValue('answer', -1) }} />
                            <h3>{questions[currentQuestion].text}</h3>
                            <FormControl>
                                <RadioGroup
                                    name={`answers-group`}
                                >
                                    {questions[currentQuestion].options.map((option, j) => <FormControlLabel key={j} control={<Radio name='answer' value={j} checked={values.answer == j} onChange={handleChange} />} label={option.text} />)}
                                </RadioGroup>
                            </FormControl>
                        </Container>
                        {currentQuestion < questions.length - 1 && <Button variant="contained" onClick={() => { nextQuestion(values.answer); setFieldValue('answer', -1) }}>Next question</Button>}
                        {currentQuestion == questions.length - 1 && <Button variant="contained" onClick={() => onFinish(values.answer)}>Finish Quiz</Button>}
                    </div>

                </form>
            )}
        </Formik>

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