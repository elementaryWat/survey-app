import { useEffect } from 'react';
import './App.css';
import SurveyForm from './components/SurveyForm';
import { useSurveyStore } from './store/survey/useSurveyStore';
import { useSContractStore } from './store/sContract/useSContractStore';
import { Button } from '@mui/material'
import SummaryAnswers from './components/SummaryAnswers';


function App() {
	const { questions, currentQuestion, answers, isSurveyStarted, isSurveyCompleted, countdownSeconds, fetchSurveyData, startSurvey, nextQuestion, addAnswer, completeSurvey } = useSurveyStore();
	const { balance, isConnectedToRopsten, fetchAccountBalance, connectToRopsten } = useSContractStore();

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

	const submit = () => {
		console.log(answers);
	}

	return (
		<div>
			<p>
				The current balance is {balance}
			</p>
			{!isConnectedToRopsten && <Button variant="contained" onClick={async () => { await connectToRopsten() }}>Connect to ropsten</Button>}
			{
				isConnectedToRopsten && <div>
					{!isSurveyStarted && <Button variant="contained" onClick={() => startSurvey(true)}>Start Survey</Button>}
					{isSurveyCompleted && <SummaryAnswers questions={questions} answers={answers} onSubmit={submit} />
					}
					{(questions.length > 0 & isSurveyStarted & !isSurveyCompleted) && <SurveyForm nextQuestion={nextQuestion} onFinish={onFinish} onSubmit={submit} questions={questions} currentQuestion={currentQuestion} countdownSeconds={countdownSeconds} />}
				</div>
			}
		</div>
	);
}

export default App;
