import React from 'react'
import { useSurveyStore } from '../store/survey/useSurveyStore';
import { useSContractStore } from '../store/sContract/useSContractStore';
import { Alert, Button } from '@mui/material';
import SurveyForm from '../components/SurveyForm';
import SummaryAnswers from '../components/SummaryAnswers';

const SurveyContainer = () => {
    const { title, image, questions, currentQuestion, answers, isSurveyStarted, isSurveyCompleted, countdownSeconds, startSurvey, nextQuestion, addAnswer, completeSurvey } = useSurveyStore();
    const { isLoading, success, successMsg, error, errorMsg, hideError, hideSuccess, submitAnswersToValidator } = useSContractStore();

    const onFinish = (answer) => {
        addAnswer(answer)
        completeSurvey()
    }

    return (
        <div className='survey-container'>
            {!isSurveyStarted && <div>
                <h3>Daily trivia</h3>
                <h4><img alt="Daily Trivia" src={image} />{title}</h4>
                <Button variant="contained" onClick={() => startSurvey(true)}>Start Survey</Button>
            </div>}
            {(questions.length > 0 && isSurveyStarted && !isSurveyCompleted) && <SurveyForm nextQuestion={nextQuestion} onFinish={onFinish} questions={questions} currentQuestion={currentQuestion} countdownSeconds={countdownSeconds} />}
            {isSurveyCompleted && <SummaryAnswers questions={questions} answers={answers} onSubmit={async () => await submitAnswersToValidator()} loading={isLoading} />}
            {error && <Alert className='alert' severity="error" onClose={hideError}>{errorMsg}</Alert>}
            {success && <Alert className='alert' onClose={hideSuccess}>{successMsg}</Alert>}
        </div>
    )
}

export default SurveyContainer