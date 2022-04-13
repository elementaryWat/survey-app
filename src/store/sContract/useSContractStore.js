import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    connectToRemoteRopstenAction,
    fetchAccountBalanceAction, fetchStatusConnectionToRopstenAction,
} from './asyncActions';
import { selectBalance, selectIsConnectedToRopsten } from './selectors';

export function useSContractStore() {
    const dispatch = useDispatch();
    const isConnectedToRopsten = useSelector(selectIsConnectedToRopsten);
    const balance = useSelector(selectBalance);

    useEffect(() => {
        fetchConnectionToRopsten()
    }, [])

    const fetchConnectionToRopsten = useCallback(
        () => dispatch(fetchStatusConnectionToRopstenAction()),
        [dispatch]
    );

    const connectToRopsten = useCallback(
        () => dispatch(connectToRemoteRopstenAction()),
        [dispatch]
    );

    const fetchAccountBalance = useCallback(
        () => dispatch(fetchAccountBalanceAction()),
        [dispatch]
    );

    return {
        balance,
        isConnectedToRopsten,
        connectToRopsten,
        fetchConnectionToRopsten,
        fetchAccountBalance,
    };
}