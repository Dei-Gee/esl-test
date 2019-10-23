import { IGetTournament } from './../types/index';
import { Tournament } from './../types/Tournament';

const tournamentInitialState: Tournament = new Tournament();


const tournamentReducer = ( state = tournamentInitialState, action: IGetTournament ) => {
    return {
        ...state,
        tournament: action.tournament,
    };
};

export { tournamentReducer };
