import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { datesUsersReducer } from "./datesUsersReducer";

export const rootReducer = combineReducers({
    datesUsers: datesUsersReducer,
    app: appReducer,
});
