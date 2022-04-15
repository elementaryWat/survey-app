import ACTIONS from './consts';

export const setConnectedToRopstenAction = (connected) => ({
  type: ACTIONS.SET_CONNECTED_TO_ROPSTEN,
  payload: connected
});

export const setSurveyContractAction = (surveyContract) => ({
  type: ACTIONS.SET_SURVEY_CONTRACT,
  payload: surveyContract
});

export const setLoadingAction = (loading) => ({
  type: ACTIONS.SET_LOADING,
  payload: loading
});

export const setLoadingBalanceAction = (loading) => ({
  type: ACTIONS.SET_LOADING_BALANCE,
  payload: loading
});

export const loadBalanceAction = (questions) => ({
  type: ACTIONS.LOAD_BALANCE,
  payload: questions
});

export const loadSuccessAction = (successMsg) => ({
  type: ACTIONS.LOAD_SUCCESS,
  payload: successMsg
});

export const hideSuccessAction = () => ({
  type: ACTIONS.HIDE_SUCCESS
});

export const loadErrorAction = (errorMsg) => ({
  type: ACTIONS.LOAD_ERROR,
  payload: errorMsg
});

export const hideErrorAction = () => ({
  type: ACTIONS.HIDE_ERROR
});
