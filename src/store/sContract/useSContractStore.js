import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    fetchAccountBalanceAction,
} from './asyncActions';
import { selectBalance } from './selectors';

export function useSContractStore() {
    const dispatch = useDispatch();
    const balance = useSelector(selectBalance);

    const fetchAccountBalance = useCallback(
        () => dispatch(fetchAccountBalanceAction()),
        [dispatch]
    );

    return {
        balance,
        fetchAccountBalance
    };
}