import ACTIONS from './consts';

export const startSurveyAction = () => ({
  type: ACTIONS.START_SURVEY,
});

export const completeSurveyAction = () => ({
  type: ACTIONS.COMPLETE_SURVEY,
});

export const loadInfoSurveyAction = (info) => ({
  type: ACTIONS.LOAD_INFO_SURVEY,
  payload: info
});

export const loadQuestionsAction = (questions) => ({
  type: ACTIONS.LOAD_QUESTIONS,
  payload: questions
});

export const loadQuestionsErrorAction = () => ({
  type: ACTIONS.LOAD_QUESTIONS_ERROR,
});

export const setCurrentQuestionAction = (currentQuestionIx) => ({
  type: ACTIONS.SET_CURRENT_QUESTION,
  payload: currentQuestionIx
});

export const nextQuestionAction = (currentAnswer) => ({
  type: ACTIONS.NEXT_QUESTION,
  payload: currentAnswer
});

export const addAnswerAction = (answer) => ({
  type: ACTIONS.ADD_ANSWER,
  payload: answer
});

export const resetAnswersAction = () => ({
  type: ACTIONS.RESET_ANSWERS
});
