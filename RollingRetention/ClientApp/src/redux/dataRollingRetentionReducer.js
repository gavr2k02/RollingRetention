import {
    CALCULATE_DATA_7_DAY_FROM_DB,
    CALCULATE_DATA_7_DAY_FROM_CLIENT,
} from "./types";

const initialState = {
    rollingRetentionXDay: [],
    rollingRetention7Day: [],
};

export const dataRollingRetentionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CALCULATE_DATA_7_DAY_FROM_DB: {
            return {
                ...state,
                rollingRetention7Day: action.payload,
            };
        }
        case CALCULATE_DATA_7_DAY_FROM_CLIENT: {
            return {
                ...state,
                rollingRetention7Day: action.payload,
            };
        }
        default:
            return state;
    }
};
