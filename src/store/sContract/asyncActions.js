import { loadBalanceAction, loadBalanceErrorAction, setSurveyContractAction } from "./actions";
import { selectSurveyContract } from "./selectors";
import { SURVEY_ABI, TOKEN_ADDRESS } from "./consts";
import { selectAnswers } from "../survey/selectors";
import web3 from './web3';

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