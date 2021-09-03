import "./App.css";
import FormSearch from "./components/FormSearch/FormSearch";
import Header from "./components/Header/Header";
import React from "react";
import Item from "./components/Item/Item";
import Favourite from "./components/Favourite/Favourite";

import { useSelector } from "react-redux";

function App() {
  const joke = useSelector((state) => state.item);

  return (
    <div className="App">
      <Header />
      <FormSearch />
      <Item joke={joke} />
      <Favourite />
    </div>
  );
}

export default App;
