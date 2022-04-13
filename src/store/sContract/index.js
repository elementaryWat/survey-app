import ACTIONS from './consts';

const initialState = {
	surveyContract: null,
	connectedToRopsten: false,
	balance: 0,
	error: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ACTIONS.SET_CONNECTED_TO_ROPSTEN:
			return { ...state, connectedToRopsten: Boolean(payload) };

		case ACTIONS.SET_INSTANCE_WEB3:
			return { ...state, web3Instance: payload };

		case ACTIONS.SET_SURVEY_CONTRACT:
			return { ...state, surveyContract: payload };

		case ACTIONS.LOAD_BALANCE:
			return { ...state, balance: payload };

		case ACTIONS.LOAD_BALANCE_ERROR:
			return { ...state, error: true };

		default:
			return state;
	}
};
