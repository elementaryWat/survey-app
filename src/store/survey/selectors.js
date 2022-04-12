// import { createSelector } from 'reselect'

export const selectCurrentQuestion = state => state.survey.currentQuestion
export const selectQuestions = state => state.survey.questions
export const selectAnswers = state => state.survey.answers