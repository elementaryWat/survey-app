import ACTIONS from './consts';

export const loadBalanceAction = (questions) => ({
  type: ACTIONS.LOAD_BALANCE,
  payload: questions
});

export const loadBalanceErrorAction = () => ({
  type: ACTIONS.LOAD_BALANCE_ERROR,
});
