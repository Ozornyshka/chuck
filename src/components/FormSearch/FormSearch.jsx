import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_ITEM } from "./store/actions";
import style from "./style.module.css";

function FormSearch() {
  const dispatch = useDispatch();
  const itemRef = React.useRef("");

  const [ref, setRef] = useState("");
  const [categories, setCategories] = useState(null);
  const [searchToCategories, setSearchToCategories] = useState("");
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(await response.json());
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  const random = async () => {
    try {
      const res = await axios.get("https://api.chucknorris.io/jokes/random");
      dispatch({ type: ADD_ITEM, payload: res.data });
    } catch (err) {
      alert(err);
    }
  };

  const searchCategories = async (ref) => {
    try {
      const res = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${ref}`
      );
      dispatch({ type: ADD_ITEM, payload: res.data });
    } catch (err) {
      alert(err);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (ref === "random") {
      random();
    } else if (ref === "From categories") {
      searchCategories(searchToCategories);
    } else {
      return alert("Выберете категорию");
    }
  }

  // function test() {
  //   let lol = document.getElementsByTagName(`${style.categories}`);
  //   console.log(lol);
  // }

  return (
    <div>
      <h2 className={style.h2}>Hey!</h2>
      <h3 className={style.h3}>Let’s try to find a joke for you:</h3>
      <form className={style.searchForm} onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="chuck"
            value="random"
            ref={itemRef}
            onChange={(e) => setRef(e.target.value)}
          />
          Random
        </label>

        <label>
          <input
            type="radio"
            name="chuck"
            value="From categories"
            onChange={(e) => setRef(e.target.value)}
            ref={itemRef}
          />
          From categories
          {ref === "From categories" ? (
            <div className="categoriesList">
              {categories.map((item, index) => (
                <label className={style.categories} key={index}>
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
            value="Search"
            id="Search"
            ref={itemRef}
            onChange={(e) => setRef(e.target.value)}
          />
          Search
        </label>
        {ref === "Search" ? (
          <input type="text" name="Search" ref={itemRef} />
        ) : null}
        <button className={style.button}>Get a joke</button>
      </form>
    </div>
  );
}

export default FormSearch;
