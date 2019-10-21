import { AllActionTypes } from "../types/index";

const allReducerDefaultState = {
    allContestants: [],
    allResults: [],
    contestant: {},
    result: {},
    tournament: {},
};

const allPurposeReducer = ( state = allReducerDefaultState, action: AllActionTypes ) => {
    switch (action.type) {
        case "GET ALL CONTESTANTS" :
            return {
                ...state,
                allContestants: action.contestants,
            };
        case "GET ALL RESULTS" :
            return {
                ...state,
                allResults: action.results,
            };
        case "GET CONTESTANT" :
            return {
                ...state,
                contestant: action.contestant,
            };
        case "GET RESULT" :
            return {
                ...state,
                result: action.result,
            };
        case "GET TOURNAMENT" :
            return {
                ...state,
                tournament: action.tournament,
            };
        default:
            return state;
    }
};

export { allPurposeReducer };
