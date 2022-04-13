import { loadBalanceAction, loadBalanceErrorAction, setConnectedToRopstenAction, setSurveyContractAction } from "./actions";
import { selectSurveyContract } from "./selectors";
import { SURVEY_ABI, TOKEN_ADDRESS } from "./consts";
import { selectAnswers } from "../survey/selectors";
import web3, { hasWeb3Provider } from './web3';

export function fetchStatusConnectionToRopstenAction() {
    return async dispatch => {
        try {
            if (hasWeb3Provider()) {
                let networkType = await web3.eth.net.getNetworkType();
                if (networkType === 'ropsten') {
                    return dispatch(setConnectedToRopstenAction(true));
                }
            }
            dispatch(setConnectedToRopstenAction(false));
        } catch (err) {
            dispatch(setConnectedToRopstenAction(false));
        }
    }
}

export function connectToSurveyContractAction() {
    return async dispatch => {
        try {
            let surveyContract = new web3.eth.Contract(SURVEY_ABI, TOKEN_ADDRESS);
            dispatch(setSurveyContractAction(surveyContract));
        } catch (err) {
            console.log(err)
        }
    }
}

export function fetchAccountBalanceAction() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
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

export function submitAnswersToValidatorAction() {
    return async (dispatch, getState) => {
        try {
            const state = getState();
            const surveyContract = selectSurveyContract(state);
            const answers = selectAnswers(state);
            const accounts = await (web3.eth)?.getAccounts();
            await surveyContract.methods.submit(13, answers).send({
                from: accounts[0]
            }).on('confirmation', async function () {
                dispatch(fetchAccountBalanceAction());
            })

        } catch (err) {
            dispatch(loadBalanceErrorAction());
        }
    }
}