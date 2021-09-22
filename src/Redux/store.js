import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { chuckApi } from "../services/chuckAPI.js";

let store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckApi.middleware),
});

export default store;
