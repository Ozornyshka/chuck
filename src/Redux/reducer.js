import { combineReducers } from "redux";
import getFavourite from "../components/Favourite/store/reducers";
import {
  getCategories,
  getItemReducer,
} from "../components/FormSearch/store/reducers";

const rootReducer = combineReducers({
  item: getItemReducer,
  favourite: getFavourite,
  categories: getCategories,
});

export default rootReducer;
