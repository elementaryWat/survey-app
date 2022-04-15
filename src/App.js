import { useEffect } from 'react';
import './App.css';
import SurveyForm from './components/SurveyForm';
import { useSurveyStore } from './store/survey/useSurveyStore';
import { useSContractStore } from './store/sContract/useSContractStore';
import { Alert, Button, CircularProgress } from '@mui/material'
import SummaryAnswers from './components/SummaryAnswers';


function App() {
	const { questions, currentQuestion, answers, isSurveyStarted, isSurveyCompleted, countdownSeconds, fetchSurveyData, startSurvey, nextQuestion, addAnswer, completeSurvey } = useSurveyStore();
	const { balance, isLoading, isLoadingBalance, success, successMsg, error, errorMsg, isConnectedToRopsten, hideError, hideSuccess, fetchAccountBalance, submitAnswersToValidator } = useSContractStore();

	useEffect(() => {
		fetchSurveyData();
	}, [])

	useEffect(() => {
		if (isConnectedToRopsten) {
			fetchAccountBalance();
		}
	}, [isConnectedToRopsten])

	const onFinish = (answer) => {
		addAnswer(answer)
		completeSurvey()
	}

	return (
		<div className='main-content'>
			{!isConnectedToRopsten && <Alert severity="info">First install Metamask and connect to Ropsten to use the app</Alert>}
			{
				isConnectedToRopsten && <div className='container'>
					<div className='header'>
						{isLoadingBalance ? <span><CircularProgress /> Loading Balance</span> : `Your current balance is ${balance} QUIZ`}

					</div>
					<div className='survey-container'>
						{!isSurveyStarted && <Button variant="contained" onClick={() => startSurvey(true)}>Start Survey</Button>}
						{(questions.length > 0 && isSurveyStarted && !isSurveyCompleted) && <SurveyForm nextQuestion={nextQuestion} onFinish={onFinish} questions={questions} currentQuestion={currentQuestion} countdownSeconds={countdownSeconds} />}
						{isSurveyCompleted && <SummaryAnswers questions={questions} answers={answers} onSubmit={async () => await submitAnswersToValidator()} loading={isLoading} />}
						{error && <Alert className='alert' severity="error" onClose={hideError}>{errorMsg}</Alert>}
						{success && <Alert className='alert' onClose={hideSuccess}>{successMsg}</Alert>}
					</div>

				</div>
			}
		</div>
	);
}

export default App;
