import { combineReducers } from "redux";
import {practitionerReducer} from "./practitioners/practitioners.reducer";

const rootReducer = combineReducers({
    practitioners: practitionerReducer
})

export default rootReducer