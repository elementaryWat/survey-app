import ACTIONS from './consts';

export const setConnectedToRopstenAction = (connected) => ({
  type: ACTIONS.SET_CONNECTED_TO_ROPSTEN,
  payload: connected
});

export const setWeb3InstanceAction = (web3Instance) => ({
  type: ACTIONS.SET_WEB3_INSTANCE,
  payload: web3Instance
});

export const setSurveyContractAction = (surveyContract) => ({
  type: ACTIONS.SET_SURVEY_CONTRACT,
  payload: surveyContract
});

export const loadBalanceAction = (questions) => ({
  type: ACTIONS.LOAD_BALANCE,
  payload: questions
});

export const loadBalanceErrorAction = () => ({
  type: ACTIONS.LOAD_BALANCE_ERROR,
});
