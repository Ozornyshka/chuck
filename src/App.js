import "./App.css";
import React, { useEffect } from "react";
import FormSearch from "./components/FormSearch";
import Header from "./components/Header";
import Item from "./components/Item";
import Favourite from "./components/Favourite";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_CATEGORIES } from "./components/FormSearch/store/actions";

function App() {
  const dispatch = useDispatch();

  const joke = useSelector((state) => state.item);
  useEffect(() => {
    axios.get("https://api.chucknorris.io/jokes/categories").then((res) => {
      dispatch({ type: GET_CATEGORIES, payload: res.data });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <FormSearch />
      {!!joke && <Item joke={joke} />}
      <Favourite />
    </div>
  );
}

export const BurgerShow = function () {
  document.body.classList.toggle("overflow");
  document.querySelector("#burger").classList.toggle("active");
};

export default App;
