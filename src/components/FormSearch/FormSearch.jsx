import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRandomJoke,
  fetchSearchCategories,
  fetchSearchInput,
} from "./store/jokeSlice";
import style from "./style.module.css";

function FormSearch() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const [radioClick, setRadioClick] = useState("");
  const [searchToCategories, setSearchToCategories] = useState(null);
  const [inputText, setInputText] = useState("");

  const radioName = {
    RandomName: "Random",
    categoriesName: "From categories",
    SearchName: "Search",
  };
  const { RandomName, categoriesName, SearchName } = { ...radioName };

  function handleSubmit(e) {
    e.preventDefault();
    if (radioClick === RandomName) {
      dispatch(fetchRandomJoke());
    } else if (radioClick === categoriesName) {
      dispatch(fetchSearchCategories(searchToCategories));
    } else if (radioClick === SearchName) {
      dispatch(fetchSearchInput(inputText));
    } else {
      return alert("Выберете категорию");
    }
  }
  return (
    <div>
      <h2 className={style.h2}>Hey!</h2>
      <h3 className={style.h3}>Let’s try to find a joke for you:</h3>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="chuck"
            value={RandomName}
            onChange={(e) => setRadioClick(e.target.value)}
          />
          {RandomName}
        </label>

        <label>
          <input
            type="radio"
            name="chuck"
            value={categoriesName}
            onChange={(e) => setRadioClick(e.target.value)}
          />
          {categoriesName}
          {radioClick === categoriesName ? (
            <div className="categoriesList">
              {categories.map((item, index) => (
                <label
                  className={
                    searchToCategories === item
                      ? `${style.categories} active`
                      : style.categories
                  }
                  key={index}
                >
                  <input
                    type="radio"
                    name="categories"
                    value={item}
                    onChange={(event) =>
                      setSearchToCategories(event.target.value)
                    }
                  />
                  {item}
                </label>
              ))}
            </div>
          ) : null}
        </label>

        <label>
          <input
            type="radio"
            name="chuck"
            value={SearchName}
            id={SearchName}
            onChange={(e) => setRadioClick(e.target.value)}
          />
          {SearchName}
        </label>
        {radioClick === SearchName ? (
          <input
            type="text"
            name="Search"
            onChange={(event) => setInputText(event.target.value)}
            style={{ maxWidth: `250px` }}
          />
        ) : null}
        <button className={style.button}>Get a joke</button>
      </form>
    </div>
  );
}

export default FormSearch;
