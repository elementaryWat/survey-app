import { useEffect, useState } from 'react';
import './App.css';
import SurveyForm from './components/surveyForm';

function App() {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const getData = async () => {
		try {
			const response = await fetch('./data/sample.json'
				, {
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				})
			return response.json()
		} catch (err) {
			return {}
		}
	}

	useEffect(() => {
		async function fetchData() {
			let data = await getData();
			setQuestions(data?.questions);
			console.log(data?.questions)
		}
		fetchData();
	}, [])

	const nextQuestion = (answer) => {
		setCurrentQuestion(currentQuestion + 1)
		setAnswers([...answers, answer])
	}
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
