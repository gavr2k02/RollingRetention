import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { dataRollingRetentionReducer } from "./dataRollingRetentionReducer";
import { datesUsersReducer } from "./datesUsersReducer";

export const rootReducer = combineReducers({
    datesUsers: datesUsersReducer,
    app: appReducer,
    dataRollingRetention: dataRollingRetentionReducer,
});
