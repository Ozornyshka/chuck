import React from "react";
import { useSelector } from "react-redux";
import Item from "../Item";
import style from "./style.module.css";
import { BurgerShow } from "../../App";

const Favourite = () => {
  const joke = useSelector((state) => state.favourite);

  return (
    <div id={`burger`} className={`favourite`}>
      <p className={style.title}>
        <span onClick={() => BurgerShow()}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#333333" />
            <rect
              width="14.8492"
              height="2.12131"
              rx="1.06065"
              transform="matrix(0.707103 -0.707111 0.707103 0.707111 8 18.5)"
              fill="white"
            />
            <rect
              width="14.8492"
              height="2.12131"
              rx="1.06065"
              transform="matrix(0.707103 0.707111 -0.707103 0.707111 9.5 8)"
              fill="white"
            />
          </svg>
        </span>
        Favourite
      </p>
      {joke.length > 0 ? (
        joke.map((e, i) => {
          return <Item joke={e} key={i} />;
        })
      ) : (
        <div>Нет закладок</div>
      )}
    </div>
  );
};

export default Favourite;
