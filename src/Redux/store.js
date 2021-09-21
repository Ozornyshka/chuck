import { createStore } from "redux";
import rootReducer from "./reducer";

let store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function saveToLocalStorage(state) {
  try {
    const favouriteState = JSON.stringify(state);
    localStorage.setItem("persistantState", favouriteState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const favouriteState = localStorage.getItem("persistantState");
    if (favouriteState === null) return undefined;
    const favouriteData = JSON.parse(favouriteState);
    return { favourite: favouriteData };
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

store.subscribe(() => saveToLocalStorage(store.getState().favourite));

export default store;
