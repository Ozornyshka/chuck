import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFavourite = createAsyncThunk(
  "favourite/fetchFavourite",
  async function loadFromLocalStorage() {
    try {
      const favouriteState = localStorage.getItem("persistantState");
      if (favouriteState === null) return undefined;
      const favouriteData = JSON.parse(favouriteState);
      return favouriteData;
    } catch (e) {
      console.warn(e);
    }
  }
);

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: [],
  reducers: {
    addFavourite(state, action) {
      state.push(action.payload);
    },
    deleteFavourite(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [fetchFavourite.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFavourite, deleteFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
