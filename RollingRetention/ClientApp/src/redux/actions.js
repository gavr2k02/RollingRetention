import axios from "axios";

import {
    UPDATE_DATE,
    ADD_ROW_DATES,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ALERT_WARNING,
    HIDE_ALERT_WARNING,
    SHOW_ALERT_ERROR,
    HIDE_ALERT_ERROR,
    SHOW_ALERT_SUCCES,
    HIDE_ALERT_SUCCES,
    CALCULATE_DATA_7_DAY_FROM_DB,
    CALCULATE_DATA_7_DAY_FROM_CLIENT,
    CALCULATE_DATA_X_DAY_FROM_DB,
    CALCULATE_DATA_X_DAY_FROM_CLIENT,
    SHOW_ALERT_ERROR_ROLLING_RETENTION,
    HIDE_ALERT_ERROR_ROLLING_RETENTION,
} from "./types";

export function updateDate(datesUser) {
    return {
        type: UPDATE_DATE,
        payload: datesUser,
    };
}

export function addRowDates() {
    return {
        type: ADD_ROW_DATES,
    };
}

export function submitDates(datesUsers) {
    return async (dispatch) => {
        try {
            dispatch(hideAlertError());
            dispatch(hideAlertSucces());
            dispatch(showLoader());

            const resp = await axios.post("api/usersdata", datesUsers);

            dispatch(showAlertSucces("Data saved successfully"));
        } catch (err) {
            dispatch(showAlertError("Something went wrong"));
            console.error(err);
        } finally {
            dispatch(hideLoader());
        }
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}

export function showAlertWarning(text) {
    return {
        type: SHOW_ALERT_WARNING,
        payload: text,
    };
}

export function hideAlertWarning() {
    return {
        type: HIDE_ALERT_WARNING,
    };
}

export function showAlertSucces(text) {
    return {
        type: SHOW_ALERT_SUCCES,
        payload: text,
    };
}

export function hideAlertSucces() {
    return {
        type: HIDE_ALERT_SUCCES,
    };
}

export function showAlertError(text) {
    return {
        type: SHOW_ALERT_ERROR,
        payload: text,
    };
}

export function hideAlertError() {
    return {
        type: HIDE_ALERT_ERROR,
    };
}

export function showAlertErrorRR(text) {
    return {
        type: SHOW_ALERT_ERROR_ROLLING_RETENTION,
        payload: text,
    };
}

export function hideAlertErrorRR() {
    return {
        type: HIDE_ALERT_ERROR_ROLLING_RETENTION,
    };
}

export function calculateData7DayFromClient(datesUser) {
    return async (dispatch) => {
        try {
            dispatch(hideAlertErrorRR());
            const resp = await axios.post(
                "api/rollingretention/calculatedatarollingRetention7dayfromclient",
                datesUser
            );
            dispatch({
                type: CALCULATE_DATA_7_DAY_FROM_CLIENT,
                payload: resp.data,
            });
        } catch (err) {
            dispatch(
                showAlertErrorRR("Something went wrong. Please check data")
            );
        }
    };
}

export function calculateData7DayFromDB() {
    return async (dispatch) => {
        try {
            dispatch(hideAlertErrorRR());
            const resp = await axios.get(
                "api/rollingretention/calculatedatarollingretention7dayfromdb"
            );
            dispatch({
                type: CALCULATE_DATA_7_DAY_FROM_DB,
                payload: resp.data,
            });
        } catch (err) {
            dispatch(showAlertErrorRR("Something went wrong"));
        }
    };
}

export function calculateDataXDayFromClient(datesUser) {
    return async (dispatch) => {
        try {
            const resp = await axios.post(
                "api/rollingretention/calculatedatarollingRetentionxdayfromclient",
                datesUser
            );
            dispatch({
                type: CALCULATE_DATA_X_DAY_FROM_CLIENT,
                payload: resp.data,
            });
        } catch (err) {
            dispatch(
                showAlertErrorRR("Something went wrong. Please check data")
            );
        }
    };
}

export function calculateDataXDayFromDB() {
    return async (dispatch) => {
        try {
            const resp = await axios.get(
                "api/rollingretention/calculatedatarollingretentionxdayfromdb"
            );
            dispatch({
                type: CALCULATE_DATA_X_DAY_FROM_DB,
                payload: resp.data,
            });
        } catch (err) {
            dispatch(showAlertErrorRR("Something went wrong"));
        }
    };
}
