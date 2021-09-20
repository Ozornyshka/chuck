import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "joke",
  initialState: null,
  reducers: {
    getJoke(state, action) {
      return action.payload;
    },
  },
});

export const { getJoke } = jokeSlice.actions;
export default jokeSlice.reducer;
