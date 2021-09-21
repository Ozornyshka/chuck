import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRandomJoke = createAsyncThunk(
  "joke/fetchRandomJoke",
  async function (_, { dispatch }) {
    const response = await axios("https://api.chucknorris.io/jokes/random");
    const data = await response.data;
    dispatch(getJoke(data));
  }
);
export const fetchSearchCategories = createAsyncThunk(
  "joke/fetchSearchCategories",
  async function (searchToCategories, { dispatch }) {
    const response = await axios(
      `https://api.chucknorris.io/jokes/random?category=${searchToCategories}`
    );
    const data = await response.data;
    dispatch(getJoke(data));
  }
);
export const fetchSearchInput = createAsyncThunk(
  "joke/fetchSearchInput",
  async function (inputText, { dispatch }) {
    const response = await axios(
      `https://api.chucknorris.io/jokes/search?query=${inputText}`
    );
    const data = await response.data;
    dispatch(
      getJoke(data.result[Math.floor(Math.random() * data.result.length - 1)])
    );
  }
);

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
