import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import {
    fetchSurveyDataAction,
} from './asyncActions';
import { selectAnswers, selectCurrentQuestion, selectIsSurveyCompleted, selectIsSurveyStarted, selectQuestions } from './selectors';
import { setCurrentQuestionAction, addAnswerAction, nextQuestionAction, startSurveyAction, completeSurveyAction } from './actions';

export function useSurveyStore() {
    const dispatch = useDispatch();
    const currentQuestion = useSelector(selectCurrentQuestion);
    const [countdownSeconds, setCountDownSeconds] = useState(-1);
    const isSurveyStarted = useSelector(selectIsSurveyStarted);
    const isSurveyCompleted = useSelector(selectIsSurveyCompleted);
    const questions = useSelector(selectQuestions);
    const answers = useSelector(selectAnswers);

    useEffect(() => {
        if (questions.length > 0) {
            setCountDownSeconds(questions[currentQuestion].lifetimeSeconds)
        }
    }, [questions, currentQuestion])

    const fetchSurveyData = useCallback(
        () => dispatch(fetchSurveyDataAction()),
        [dispatch]
    );

    const startSurvey = useCallback(
        () => dispatch(startSurveyAction()),
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

    const completeSurvey = useCallback(
        () => dispatch(completeSurveyAction()),
        [dispatch]
    );

    return {
        questions,
        currentQuestion,
        isSurveyStarted,
        isSurveyCompleted,
        countdownSeconds,
        answers,
        fetchSurveyData,
        startSurvey,
        setCurrentQuestion,
        addAnswer,
        nextQuestion,
        completeSurvey
    };
}