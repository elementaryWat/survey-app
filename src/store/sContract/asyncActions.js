import { loadBalanceAction, loadBalanceErrorAction } from "./actions";
import web3 from "../../web3/web3";
import surveyContract from "../../web3/surveyContract";


export function fetchAccountBalanceAction() {
    return async dispatch => {
        try {
            const accounts = await web3.eth.getAccounts();
            const walletBalance = await surveyContract.methods.balanceOf(accounts[0]).call()
            const decimals = await surveyContract.methods.decimals().call();
            const adjustedBalance = walletBalance * 10 ** -decimals
            dispatch(loadBalanceAction(adjustedBalance));
        } catch (err) {
            dispatch(loadBalanceErrorAction());
        }
    }
}