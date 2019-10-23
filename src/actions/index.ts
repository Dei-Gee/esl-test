import axios from "axios";
import { Dispatch } from "redux";
import { Contestant } from "../types/Contestant";
import { AppState } from "./../store/configureStore";
import { AppActions, GET_ALL_CONTESTANTS, GET_ALL_RESULTS, GET_TOURNAMENT, GET_CONTESTANT } from "./../types/index";
import { Result } from "./../types/Result";
import { Tournament } from "./../types/Tournament";

export const getAllContestants = (contestants: Contestant[]): AppActions => ({
    contestants,
    type: GET_ALL_CONTESTANTS,
});

export const getAllResults = (results: Result[]): AppActions => ({
    results,
    type: GET_ALL_RESULTS,
});

export const getTournament = (tournament: Tournament): AppActions => ({
    tournament,
    type: GET_TOURNAMENT,
});


export const startGetAllContestants = (tourneyId: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        axios.get(`https://api.eslgaming.com/play/v1/leagues/${tourneyId}/contestants`)
        .then((response) => {
            (response.data) ? dispatch(getAllContestants(response.data)) : console.log("could not get data");
            
        });
    };
};

export const startGetAllResults = () => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        axios.get("https://api.eslgaming.com/play/v1/leagues/177161/results")
        .then((response) => {
            dispatch(getAllResults(response.data));
        });
    };
};

export const startGetTournament = (tourneyId: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        axios.get(`https://api.eslgaming.com/play/v1/leagues/${tourneyId}`)
        .then((response) => {
            (response.data) ? dispatch(getTournament(response.data)) : console.log("could not get data");
        });
    };
};