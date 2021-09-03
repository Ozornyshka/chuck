import { combineReducers } from "redux";
import getFavourite from "../components/Favourite/store/reducers";
import getItemReducer from "../components/FormSearch/store/reducers";

const rootReducer = combineReducers({
  item: getItemReducer,
  favourite: getFavourite,
});

export default rootReducer;
