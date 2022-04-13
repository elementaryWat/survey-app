import ACTIONS from './consts';

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
