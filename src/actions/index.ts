import axios from "axios";
import { Dispatch } from "redux";
import { AppActions, GET_TOURNAMENT } from "./../types/index";
import { Tournament } from "./../types/Tournament";

const bandaidURL = "https://cors-anywhere.herokuapp.com/";

export const startGetTournament = (tourneyId: string) => {
    const getTournament = (tournament: Tournament): AppActions => ({
        tournament,
        type: GET_TOURNAMENT,
    });

    return (dispatch: Dispatch<AppActions>) => {
        axios.get(`${bandaidURL}https://api.eslgaming.com/play/v1/leagues/${tourneyId}`)
        .then((response) => {
            (response.data) ? dispatch(getTournament(response.data)) : console.log("could not get data");
        });
    };
};
