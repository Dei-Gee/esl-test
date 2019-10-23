import axios from "axios";
import { Dispatch } from "redux";
import { Contestant } from "../types/Contestant";
import { AppState } from "./../store/configureStore";
import { AppActions, GET_ALL_CONTESTANTS } from "./../types/index";
import { Result } from "./../types/Result";
import { Tournament } from "./../types/Tournament";

export const getAllContestants = (contestants: Contestant[]): AppActions => ({
    contestants,
    type: GET_ALL_CONTESTANTS,
});

export const startGetAllContestants = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        axios.get("https://api.eslgaming.com/play/v1/leagues/177161/contestants")
        .then((response) => {
            dispatch(getAllContestants(response.data));
        });
    };
};
