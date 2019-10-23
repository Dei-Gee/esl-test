import { IGetContestant, IGetResult, IGetTournament } from './../types/index';
import { Tournament } from './../types/Tournament';
import { IGetAllContestants, IGetAllResults } from '../types/index';
import { Result } from '../types/Result';
import { Contestant } from '../types/Contestant';
import { AllActionTypes } from "../types/index";

const allContestantsInitialState: Contestant[] = [];
const allResultsInitialState: Result[] = [];
const contestantInitialState: Contestant = new Contestant();
const resultInitialState: Result = new Result();
const tournamentInitialState: Tournament = new Tournament();

const allContestantsReducer = ( state = allContestantsInitialState, action: IGetAllContestants ) => {
    return {
        ...state,
        allContestants: action.contestants,
    };
};

const allResultsReducer = ( state = allResultsInitialState, action: IGetAllResults ) => {
    return {
        ...state,
        allResults: action.results,
    };
};

const contestantReducer = ( state = contestantInitialState, action: IGetContestant ) => {
    return {
        ...state,
        contestant: action.contestant,
    };
};

const resultReducer = ( state = resultInitialState, action: IGetResult ) => {
    return {
        ...state,
        result: action.result,
    };
};

const tournamentReducer = ( state = tournamentInitialState, action: IGetTournament ) => {
    return {
        ...state,
        tournament: action.tournament,
    };
};

export { allContestantsReducer, allResultsReducer, contestantReducer, resultReducer, tournamentReducer };
