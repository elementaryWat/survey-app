import { getSurvey } from "../../api/survey"
import { loadInfoSurveyAction, loadQuestionsAction, loadQuestionsErrorAction, } from "./actions";

export function fetchSurveyDataAction() {
    return async dispatch => {
        const surveyData = await getSurvey();
        if (surveyData !== {}) {
            dispatch(loadInfoSurveyAction({ title: surveyData.title, image: surveyData.image }));
            dispatch(loadQuestionsAction(surveyData.questions));
        } else {
            dispatch(loadQuestionsErrorAction());
        }
    }
}