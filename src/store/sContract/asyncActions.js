import { loadBalanceAction, loadBalanceErrorAction, setConnectedToRopstenAction, setSurveyContractAction, setWeb3InstanceAction } from "./actions";

import Web3 from "web3";

import { selectSurveyContract, selectWeb3Instance } from "./selectors";
import { SURVEY_ABI, TOKEN_ADDRESS } from "./consts";

export function fetchStatusConnectionToRopstenAction() {
    return async dispatch => {
        try {
            if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
                let web3 = new Web3(window.web3.currentProvider)
                let surveyContract = new web3.eth.Contract(SURVEY_ABI, TOKEN_ADDRESS);
                dispatch(setWeb3InstanceAction(web3));
                dispatch(setSurveyContractAction(surveyContract));
                dispatch(setConnectedToRopstenAction(true));
            }
            else {
                dispatch(setConnectedToRopstenAction(false));
            }
        } catch (err) {
            dispatch(setConnectedToRopstenAction(false));
        }
    }
}

export function connectToRemoteRopstenAction() {
    return async dispatch => {
        try {
            /* eslint-disable no-debugger */
            debugger;
            let web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/0836c0ac05454f5a95a693d55adbe438'))
            let surveyContract = new web3.eth.Contract(SURVEY_ABI, TOKEN_ADDRESS);
            dispatch(setWeb3InstanceAction(web3));
            dispatch(setSurveyContractAction(surveyContract));
            dispatch(setConnectedToRopstenAction(true));
        } catch (err) {
            dispatch(setConnectedToRopstenAction(false));
        }
    }
}

export function fetchAccountBalanceAction() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const web3 = selectWeb3Instance(state);
            const surveyContract = selectSurveyContract(state);
            const accounts = await (web3.eth)?.getAccounts();
            const walletBalance = await surveyContract.methods.balanceOf(accounts[0]).call()
            const decimals = await surveyContract.methods.decimals().call();
            const adjustedBalance = walletBalance * 10 ** -decimals
            dispatch(loadBalanceAction(adjustedBalance));
        } catch (err) {
            dispatch(loadBalanceErrorAction());
        }
    }
}