import { useEffect } from 'react';
import './App.css';
import SurveyForm from './components/SurveyForm';
import { useSurveyStore } from './store/survey/useSurveyStore';
import { useSContractStore } from './store/sContract/useSContractStore';
import { Button } from '@mui/material'
import SummaryAnswers from './components/SummaryAnswers';


function App() {
	const { questions, currentQuestion, answers, isSurveyStarted, isSurveyCompleted, countdownSeconds, fetchSurveyData, startSurvey, nextQuestion, addAnswer, completeSurvey } = useSurveyStore();
	const { balance, fetchAccountBalance, submitAnswersToValidator } = useSContractStore();

	useEffect(() => {
		fetchSurveyData();
		fetchAccountBalance();
	}, [])

	const onFinish = (answer) => {
		addAnswer(answer)
		completeSurvey()
	}

	return (
		<div>
			<p>
				The current balance is {balance}
			</p>
			{!isSurveyStarted && <Button variant="contained" onClick={() => startSurvey(true)}>Start Survey</Button>}
			{isSurveyCompleted && <SummaryAnswers questions={questions} answers={answers} onSubmit={async () => { await submitAnswersToValidator() }} />
			}
			{(questions.length > 0 && isSurveyStarted && !isSurveyCompleted) && <SurveyForm nextQuestion={nextQuestion} onFinish={onFinish} questions={questions} currentQuestion={currentQuestion} countdownSeconds={countdownSeconds} />}
		</div>
	);
}

export default App;
