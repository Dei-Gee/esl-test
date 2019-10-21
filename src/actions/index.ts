import { Dispatch } from "redux";
import { AppState } from "./../store/configureStore";
import { IContestant } from "./../types/IContestant";
import { AppActions, GET_ALL_CONTESTANTS } from "./../types/index";
import { IResult } from "./../types/IResult";
import { ITournament } from "./../types/ITournament";

export const getAllContestants = (contestants: IContestant[]): AppActions => ({
    contestants,
    type: GET_ALL_CONTESTANTS,
});

export const startGetAllContestants = (contestants: IContestant[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(getAllContestants(contestants));
    };
};
