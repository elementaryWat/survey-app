import ACTIONS from './consts';

const initialState = {
	started: false,
	questions: [],
	currentQuestion: 0,
	answers: [],
	error: false,
	completed: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTIONS.START_SURVEY:
			return { ...state, started: true };

		case ACTIONS.LOAD_QUESTIONS:
			return { ...state, questions: payload };

		case ACTIONS.LOAD_QUESTIONS_ERROR:
			return { ...state, error: true };

		case ACTIONS.SET_CURRENT_QUESTION:
			return { ...state, currentQuestion: payload };

		case ACTIONS.NEXT_QUESTION:
			return { ...state, currentQuestion: state.currentQuestion + 1, answers: [...state.answers, Number(payload)] };

		case ACTIONS.ADD_ANSWER:
			return { ...state, answers: [...state.answers, Number(payload)] };

		case ACTIONS.RESET_ANSWERS:
			return { ...state, answers: [] };

		case ACTIONS.COMPLETE_SURVEY:
			return { ...state, completed: true };

		default:
			return state;
	}
};
