import React from "react";
import { useSelector } from "react-redux";
import Item from "../Item/Item";
import style from "./style.module.css";

const Favourite = () => {
  const joke = useSelector((state) => state.favourite);

  return (
    <div className={style.favourite}>
      <p className={style.title}>Favourite</p>
      {joke.length > 0 ? (
        joke.map((e, i) => {
          return <Item joke={e} />;
        })
      ) : (
        <div>Нет закладок</div>
      )}
      {}
    </div>
  );
};

export default Favourite;
