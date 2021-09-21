import "./App.css";
import React, { useEffect } from "react";
import FormSearch from "./components/FormSearch";
import Header from "./components/Header";
import Item from "./components/Item";
import Favourite from "./components/Favourite";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./components/FormSearch/store/categoriesSlice";
import { fetchFavourite } from "./components/Favourite/store/favouriteSlice";

function App() {
  const dispatch = useDispatch();

  const joke = useSelector((state) => state.joke);
  const favourite = useSelector((state) => state.favourite);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchFavourite());
  }, [dispatch]);

  useEffect(() => {
    const favouriteState = JSON.stringify(favourite);
    localStorage.setItem("persistantState", favouriteState);
  }, [favourite]);

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
