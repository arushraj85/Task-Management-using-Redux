import changeTheNumber from "./upDown";
import taskReducer from "./upDown";

import {combineReducers} from "redux";

const rootReducer = combineReducers({
    // changeTheNumber : changeTheNumber,
    taskReducer:taskReducer

})

export default rootReducer;