import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    fetchSurveyDataAction,
} from './asyncActions';
import { selectAnswers, selectCurrentQuestion, selectQuestions } from './selectors';
import { setCurrentQuestionAction, addAnswerAction, nextQuestionAction } from './actions';

export function useSurveyStore() {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const questions = useSelector(selectQuestions);
    const answers = useSelector(selectAnswers);

    const fetchSurveyData = useCallback(
        () => dispatch(fetchSurveyDataAction()),
        [dispatch]
    );

    const setCurrentQuestion = useCallback(
        (currentQuestionIx) => dispatch(setCurrentQuestionAction(currentQuestionIx)),
        [dispatch]
    );

    const addAnswer = useCallback(
        (answer) => dispatch(addAnswerAction(answer)),
        [dispatch]
    );

    const nextQuestion = useCallback(
        (answer) => dispatch(nextQuestionAction(answer)),
        [dispatch]
    );


    return {
        questions,
        currentQuestion,
        answers,
        fetchSurveyData,
        setCurrentQuestion,
        addAnswer,
        nextQuestion
    };
}