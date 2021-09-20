import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

let store = configureStore({
  reducer: rootReducer,
});

// function saveToLocalStorage(state) {
//   try {
//     const favouriteState = JSON.stringify(state);
//     localStorage.setItem("persistantState", favouriteState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// store.subscribe(() => saveToLocalStorage(store.getState().favourite));

export default store;
