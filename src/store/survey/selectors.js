// import { createSelector } from 'reselect'

export const selectCurrentQuestion = state => state.survey.currentQuestion
export const selectIsSurveyStarted = state => state.survey.started
export const selectIsSurveyCompleted = state => state.survey.completed
export const selectTitle = state => state.survey.info.title
export const selectImage = state => state.survey.info.image
export const selectQuestions = state => state.survey.questions
export const selectAnswers = state => state.survey.answers