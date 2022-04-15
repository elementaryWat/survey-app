import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    connectToSurveyContractAction, fetchAccountBalanceAction, fetchStatusConnectionToRopstenAction, submitAnswersToValidatorAction,
} from './asyncActions';
import { selectBalance, selectError, selectErrorMsg, selectIsConnectedToRopsten, selectIsLoading, selectIsLoadingBalance, selectSuccess, selectSuccessMsg } from './selectors';
import { hideErrorAction, hideSuccessAction } from './actions';

export function useSContractStore() {
    const dispatch = useDispatch();
    const isConnectedToRopsten = useSelector(selectIsConnectedToRopsten);
    const balance = useSelector(selectBalance);
    const isLoading = useSelector(selectIsLoading);
    const isLoadingBalance = useSelector(selectIsLoadingBalance);
    const success = useSelector(selectSuccess);
    const successMsg = useSelector(selectSuccessMsg);
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

    const hideSuccess = useCallback(
        () => dispatch(hideSuccessAction()),
        [dispatch]
    );

    const hideError = useCallback(
        () => dispatch(hideErrorAction()),
        [dispatch]
    );

    return {
        balance,
        isLoading,
        isLoadingBalance,
        success,
        successMsg,
        error,
        errorMsg,
        isConnectedToRopsten,
        connectToSurveyContract,
        fetchAccountBalance,
        submitAnswersToValidator,
        hideSuccess,
        hideError
    };
}