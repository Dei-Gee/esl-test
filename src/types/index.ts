import { Tournament } from "./Tournament";

// action strings
export const GET_TOURNAMENT = "GET TOURNAMENT";

export interface IGetTournament {
    type: typeof GET_TOURNAMENT;
    tournament: Tournament;
}

export type AllActionTypes = IGetTournament;

export type AppActions = AllActionTypes;
