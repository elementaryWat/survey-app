import ACTIONS from './consts';

export const setConnectedToRopstenAction = (connected) => ({
  type: ACTIONS.SET_CONNECTED_TO_ROPSTEN,
  payload: connected
});

export const setSurveyContractAction = (surveyContract) => ({
  type: ACTIONS.SET_SURVEY_CONTRACT,
  payload: surveyContract
});

export const loadBalanceAction = (questions) => ({
  type: ACTIONS.LOAD_BALANCE,
  payload: questions
});

export const loadErrorAction = (errorMsg) => ({
  type: ACTIONS.LOAD_ERROR,
  payload: errorMsg
});
