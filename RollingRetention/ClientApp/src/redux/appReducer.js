import {
    HIDE_ALERT_ERROR,
    HIDE_ALERT_WARNING,
    HIDE_LOADER,
    SHOW_ALERT_ERROR,
    SHOW_ALERT_WARNING,
    SHOW_LOADER,
    SHOW_ALERT_SUCCES,
    HIDE_ALERT_SUCCES,
} from "./types";

const initialState = {
    loading: false,
    alertWarning: null,
    alertSucces: null,
    alertError: null,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return { ...state, loading: true };
        case HIDE_LOADER:
            return { ...state, loading: false };
        case SHOW_ALERT_WARNING:
            return { ...state, alertWarning: action.payload };
        case HIDE_ALERT_WARNING:
            return { ...state, alertWarning: null };
        case SHOW_ALERT_SUCCES:
            return { ...state, alertSucces: action.payload };
        case HIDE_ALERT_SUCCES:
            return { ...state, alertSucces: null };
        case SHOW_ALERT_ERROR:
            return { ...state, alertError: action.payload };
        case HIDE_ALERT_ERROR:
            return { ...state, alertError: null };
        default:
            return state;
    }
};
