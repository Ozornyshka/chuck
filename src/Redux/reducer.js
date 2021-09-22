import { combineReducers } from "redux";
import jokeReducer from "../components/FormSearch/store/jokeSlice.js";
import categoriesReducer from "../components/FormSearch/store/categoriesSlice";
import favouriteReducer from "../components/Favourite/store/favouriteSlice.js";
import { chuckApi } from "../services/chuckAPI.js";

const rootReducer = combineReducers({
  [chuckApi.reducerPath]: chuckApi.reducer,
  favourite: favouriteReducer,
  categories: categoriesReducer,
  joke: jokeReducer,
});

export default rootReducer;
