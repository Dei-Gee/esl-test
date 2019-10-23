import {  applyMiddleware, combineReducers, createStore } from "redux";
import thunk,  { ThunkMiddleware } from "redux-thunk";
import { allContestantsReducer, allResultsReducer, contestantReducer, resultReducer, tournamentReducer } from "../reducers/allReducers";
import { AppActions } from "./../types/index";

export const rootReducer = combineReducers({
    allContestants: allContestantsReducer,
    allResults: allResultsReducer,
    contestant: contestantReducer,
    result: resultReducer,
    tournament: tournamentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);
