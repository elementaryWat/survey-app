import { ACTIONS } from './consts';

export const startSurvey = () => ({
  type: ACTIONS.START_SURVEY,
});

export const completeSurvey = () => ({
  type: ACTIONS.COMPLETE_SURVEY,
});
