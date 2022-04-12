import { getSurvey } from "../../api/survey"
import { loadQuestionsAction, loadQuestionsErrorAction, } from "./actions";

export function fetchSurveyDataAction() {
    return async dispatch => {
        const surveyData = await getSurvey();
        if (surveyData !== {}) {
            dispatch(loadQuestionsAction(surveyData.questions));
        } else {
            dispatch(loadQuestionsErrorAction());
        }
    }
}