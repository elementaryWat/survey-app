import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    connectToSurveyContractAction, fetchAccountBalanceAction, submitAnswersToValidatorAction,
} from './asyncActions';
import { selectBalance, selectIsConnectedToRopsten } from './selectors';

export function useSContractStore() {
    const dispatch = useDispatch();
    const isConnectedToRopsten = useSelector(selectIsConnectedToRopsten);
    const balance = useSelector(selectBalance);

    useEffect(() => {
        connectToSurveyContract()
    }, [])

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
        isConnectedToRopsten,
        connectToSurveyContract,
        fetchAccountBalance,
        submitAnswersToValidator
    };
}