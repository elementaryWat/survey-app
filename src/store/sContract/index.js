import ACTIONS, { DEFAULT_ERROR_MSG, DEFAULT_SUCCESS_MSG } from './consts';

const initialState = {
	surveyContract: null,
	connectedToRopsten: false,
	balance: 0,
	loading: false,
	loadingBalance: false,
	error: false,
	success: false,
	errorMsg: DEFAULT_ERROR_MSG,
	successMsg: DEFAULT_ERROR_MSG,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ACTIONS.SET_CONNECTED_TO_ROPSTEN:
			return { ...state, connectedToRopsten: Boolean(payload) };

		case ACTIONS.SET_INSTANCE_WEB3:
			return { ...state, web3Instance: payload };

		case ACTIONS.SET_SURVEY_CONTRACT:
			return { ...state, surveyContract: payload };

		case ACTIONS.SET_LOADING:
			return { ...state, loading: Boolean(payload) };

		case ACTIONS.SET_LOADING_BALANCE:
			return { ...state, loadingBalance: Boolean(payload) };

		case ACTIONS.LOAD_BALANCE:
			return { ...state, balance: payload };

		case ACTIONS.LOAD_SUCCESS:
			return { ...state, success: true, error: false, successMsg: payload || DEFAULT_SUCCESS_MSG };

		case ACTIONS.HIDE_SUCCESS:
			return { ...state, success: false };

		case ACTIONS.LOAD_ERROR:
			return { ...state, error: true, success: false, errorMsg: payload || DEFAULT_ERROR_MSG };

		case ACTIONS.HIDE_ERROR:
			return { ...state, error: false };

		default:
			return state;
	}
};
