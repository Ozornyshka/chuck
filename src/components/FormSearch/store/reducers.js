import { ADD_ITEM } from "./actions";

function getItemReducer(
  state = {
    categories: [],
    created_at: "2020-01-05 13:42:27.496799",
    icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    id: "svprA16fSXaWMc2YGmUXWQ",
    updated_at: "2020-01-05 13:42:27.496799",
    url: "https://api.chucknorris.io/jokes/svprA16fSXaWMc2YGmUXWQ",
    value:
      "Death is not the greatest loss in life Chuck Norris is if he died but Chuck Norris doesn't die for know one",
  },
  action
) {
  switch (action.type) {
    case ADD_ITEM:
      return { ...action.payload };
    default:
      return state;
  }
}

export default getItemReducer;
