import ACTIONS from './consts';

const initialState = {
	balance: 0,
	error: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ACTIONS.LOAD_BALANCE:
			return { ...state, balance: payload };

		case ACTIONS.LOAD_BALANCE_ERROR:
			return { ...state, error: true };

		default:
			return state;
	}
};
