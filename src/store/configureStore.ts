import {  applyMiddleware, combineReducers, createStore } from "redux";
import thunk,  { ThunkMiddleware } from "redux-thunk";
import { allPurposeReducer } from "../reducers/allPurposeReducer";
import { AppActions } from "./../types/index";

export const rootReducer = combineReducers({
    allData: allPurposeReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
);
