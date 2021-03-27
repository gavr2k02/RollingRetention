import { ADD_ROW_DATES, UPDATE_DATE } from "./types";

const initialState = {
    datesUser: [
        { id: 1, dateRegistration: "", dateLastActivity: "" },
        { id: 2, dateRegistration: "", dateLastActivity: "" },
        { id: 3, dateRegistration: "", dateLastActivity: "" },
        { id: 4, dateRegistration: "", dateLastActivity: "" },
        { id: 5, dateRegistration: "", dateLastActivity: "" },
    ],
};

export const datesUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DATE:
            return {
                ...state,
                datesUser: state.datesUser.map((dates) =>
                    dates.id === action.payload.id
                        ? {
                              ...dates,
                              dateRegistration: action.payload.dateRegistration,
                              dateLastActivity: action.payload.dateLastActivity,
                          }
                        : dates
                ),
            };
        case ADD_ROW_DATES:
            return {
                ...state,
                datesUser: state.datesUser.concat([
                    {
                        id: state.datesUser.length + 1,
                        dateRegistration: "",
                        dateLastActivity: "",
                    },
                ]),
            };
        default:
            return state;
    }
};
