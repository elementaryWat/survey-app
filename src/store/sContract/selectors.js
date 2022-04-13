// import { createSelector } from 'reselect'

export const selectIsConnectedToRopsten = state => state.sContract.connectedToRopsten
export const selectWeb3Instance = state => state.sContract.web3Instance
export const selectSurveyContract = state => state.sContract.surveyContract
export const selectBalance = state => state.sContract.balance