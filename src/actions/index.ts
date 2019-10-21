import * as constants from "../constants";


// define action interfaces
export interface SetLanguage {
    type: constants.SET_LANGUAGE;
    language: string;
}
export interface SetCountry {
    type: constants.SET_COUNTRY;
    country: string;
}
export interface Authenticate {
    type: constants.AUTHENTICATE;
    username: string;
    pw: string;
}

export type Locality = SetLanguage | SetCountry;

// define actions
export function setLanguage(l: string): SetLanguage ({
    type: constants.SET_LANGUAGE,
    language: l,
});
export function setCountry(c: string): SetCountry ({
   type: constants.SET_COUNTRY,
   country: c,
});
export function authenticate(u: string, pw: string): Authenticate ({
   type: constants.AUTHENTICATE,
   username: u,
   pw
});
