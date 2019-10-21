import { Locality } from "../actions";
import { AUTHENTICATE, SET_COUNTRY, SET_LANGUAGE} from "../constants/index";
import { StoreState } from "../types/index";
export function locality(state: StoreState, action: Locality): StoreState {

  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.language};
    case SET_COUNTRY:
      return { ...state, language: action.country};
    case AUTHENTICATE:
      return {
         ...state,
         auth: {
            username: action.username,
            authenticated: true,
          },
      };
   }
  return state;
}
