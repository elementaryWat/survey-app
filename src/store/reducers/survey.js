import ACTIONS from '../actions/consts';

const initialState = {
	started: false,
	completed: false,
};

export default (state = initialState, { type }) => {
	switch (type) {
		case ACTIONS.START_SURVEY:
			return { ...state, started: true };

		case ACTIONS.COMPLETE_SURVEY:
			return { ...state, completed: true };

		default:
			return state;
	}
};
