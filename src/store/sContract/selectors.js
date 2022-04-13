// import { createSelector } from 'reselect'

export const selectIsConnectedToRopsten = state => state.sContract.connectedToRopsten
export const selectSurveyContract = state => state.sContract.surveyContract
export const selectBalance = state => state.sContract.balance
export const selectError = state => state.sContract.error
export const selectErrorMsg = state => state.sContract.errorMsg