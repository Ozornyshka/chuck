import { combineReducers } from "redux";
import getItemReducer from "../components/FormSearch/store/reducers";

const rootReducer = combineReducers({ item: getItemReducer });

export default rootReducer;
