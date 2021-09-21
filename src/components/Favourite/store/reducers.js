import { ADD_FAVOURITE, DELETE_FAVOURITE } from "./actions";

function getFavourite(state = [], action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];
    case DELETE_FAVOURITE:
      return [...action.payload];
    default:
      return state;
  }
}

export default getFavourite;
