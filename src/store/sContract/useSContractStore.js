import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    connectToSurveyContractAction, fetchAccountBalanceAction, fetchStatusConnectionToRopstenAction, submitAnswersToValidatorAction,
} from './asyncActions';
import { selectBalance, selectError, selectErrorMsg, selectIsConnectedToRopsten } from './selectors';

export function useSContractStore() {
    const dispatch = useDispatch();
    const isConnectedToRopsten = useSelector(selectIsConnectedToRopsten);
    const balance = useSelector(selectBalance);
    const error = useSelector(selectError);
    const errorMsg = useSelector(selectErrorMsg);

    useEffect(() => {
        fetchConnectionToRopsten()
    }, [])

    useEffect(() => {
        if (isConnectedToRopsten) {
            connectToSurveyContract()
        }
    }, [isConnectedToRopsten])

    const fetchConnectionToRopsten = useCallback(
        () => dispatch(fetchStatusConnectionToRopstenAction()),
        [dispatch]
    );

    const connectToSurveyContract = useCallback(
        () => dispatch(connectToSurveyContractAction()),
        [dispatch]
    );

    const fetchAccountBalance = useCallback(
        () => dispatch(fetchAccountBalanceAction()),
        [dispatch]
    );

    const submitAnswersToValidator = useCallback(
        () => dispatch(submitAnswersToValidatorAction()),
        [dispatch]
    );

    return {
        balance,
        error,
        errorMsg,
        isConnectedToRopsten,
        connectToSurveyContract,
        fetchAccountBalance,
        submitAnswersToValidator
    };
}