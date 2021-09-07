import "./App.css";
import React from "react";
import FormSearch from "./components/FormSearch";
import Header from "./components/Header";
import Item from "./components/Item";
import Favourite from "./components/Favourite";
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

export const BurgerShow = function () {
  document.body.classList.toggle("overflow");
  document.querySelector("#burger").classList.toggle("active");
};

export default App;
