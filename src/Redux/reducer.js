import { combineReducers } from "redux";
import jokeReducer from "../components/FormSearch/store/jokeSlice.js";
import categoriesReducer from "../components/FormSearch/store/categoriesSlice";
import favouriteReducer from "../components/Favourite/store/favouriteSlice.js";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  categories: categoriesReducer,
  joke: jokeReducer,
});

export default rootReducer;
