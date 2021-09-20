import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async function () {
    const response = await axios("https://api.chucknorris.io/jokes/categories");

    const data = await response.data;
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    getCategories(state, action) {
      return action.payload;
    },
  },
  extraReducers: {
    [fetchCategories.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export const { getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
