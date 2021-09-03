import { ADD_FAVOURITE } from "./actions";

function getFavourite(state = [], action) {
  switch (action.type) {
    case ADD_FAVOURITE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default getFavourite;
