import { Contestant } from "./Contestant";
import { Result } from "./Result";
import { Tournament } from "./Tournament";

// action strings
export const GET_ALL_CONTESTANTS = "GET ALL CONTESTANTS";
export const GET_CONTESTANT = "GET CONTESTANT";
export const GET_ALL_RESULTS = "GET ALL RESULTS";
export const GET_RESULT = "GET RESULT";
export const GET_TOURNAMENT = "GET TOURNAMENT";

export interface IGetAllContestants {
    type: typeof GET_ALL_CONTESTANTS;
    contestants: Contestant[];
}

export interface IGetContestant {
    type: typeof GET_CONTESTANT;
    contestant: Contestant;
}

export interface IGetAllResults {
    type: typeof GET_ALL_RESULTS;
    results: Result[];
}

export interface IGetResult {
    type: typeof GET_RESULT;
    result: Result;
}

export interface IGetTournament {
    type: typeof GET_TOURNAMENT;
    tournament: Tournament;
}

export type AllActionTypes =
    IGetAllContestants | IGetAllResults |
    IGetContestant | IGetResult |
    IGetTournament;

export type AppActions = AllActionTypes;
