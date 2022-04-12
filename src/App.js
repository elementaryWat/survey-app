import { useEffect } from 'react';
import './App.css';
import SurveyForm from './components/surveyForm';
import { useSurveyStore } from './store/survey/useSurveyStore';

function App() {
	const { questions, currentQuestion, answers, fetchSurveyData, nextQuestion } = useSurveyStore();

	useEffect(() => {
		fetchSurveyData();
	}, [])

	const submit = async (answer) => {
		console.log([...answers, answer]);
	}
	return (
		<div>
			{(questions.length > 0) && <SurveyForm nextQuestion={nextQuestion} onSubmit={submit} questions={questions} currentQuestion={currentQuestion} />}
		</div>
	);
}

export default App;
