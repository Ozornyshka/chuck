import { ADD_ITEM, GET_CATEGORIES } from "./actions";

export const getItemReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...action.payload };
    default:
      return state;
  }
};

export const getCategories = (state = [], action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
