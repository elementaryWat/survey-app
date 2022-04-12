import { useEffect } from 'react';
import './App.css';
import SurveyForm from './components/SurveyForm';
import { useSurveyStore } from './store/survey/useSurveyStore';
import { Button } from '@mui/material'
import SummaryAnswers from './components/SummaryAnswers';


function App() {
	const { questions, currentQuestion, answers, isSurveyStarted, isSurveyCompleted, countdownSeconds, fetchSurveyData, startSurvey, nextQuestion, addAnswer, completeSurvey } = useSurveyStore();

	useEffect(() => {
		fetchSurveyData();
	}, [])

	const onFinish = (answer) => {
		addAnswer(answer)
		completeSurvey()
	}

	const submit = () => {
		console.log(answers);
	}

	return (
		<div>
			{!isSurveyStarted && <Button variant="contained" onClick={() => startSurvey(true)}>Start Survey</Button>}
			{isSurveyCompleted && <SummaryAnswers questions={questions} answers={answers} onSubmit={submit} />
			}
			{(questions.length > 0 & isSurveyStarted & !isSurveyCompleted) && <SurveyForm nextQuestion={nextQuestion} onFinish={onFinish} onSubmit={submit} questions={questions} currentQuestion={currentQuestion} countdownSeconds={countdownSeconds} />}
		</div>
	);
}

export default App;
