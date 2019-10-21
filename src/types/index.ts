import { IContestant } from "./IContestant";
import { IResult } from "./IResult";
import { ITournament } from "./ITournament";

// action strings
export const GET_ALL_CONTESTANTS = "GET ALL CONTESTANTS";
export const GET_CONTESTANT = "GET CONTESTANT";
export const GET_ALL_RESULTS = "GET ALL RESULTS";
export const GET_RESULT = "GET RESULT";
export const GET_TOURNAMENT = "GET TOURNAMENT";

export interface IGetAllContestants {
    type: typeof GET_ALL_CONTESTANTS;
    contestants: IContestant[];
}

export interface IGetContestant {
    type: typeof GET_CONTESTANT;
    contestant: IContestant;
}

export interface IGetAllResults {
    type: typeof GET_ALL_RESULTS;
    results: IResult[];
}

export interface IGetResult {
    type: typeof GET_RESULT;
    result: IResult;
}

export interface IGetTournament {
    type: typeof GET_TOURNAMENT;
    tournament: ITournament;
}

export type AllActionTypes =
    IGetAllContestants | IGetAllResults |
    IGetContestant | IGetResult |
    IGetTournament;

export type AppActions = AllActionTypes;
