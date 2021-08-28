import React from "react";
import { useSelector } from "react-redux";
import style from "./style.module.css";

const Item = () => {
  const joke = useSelector((state) => state.item.item);
  return joke.value.length > 0 ? (
    <div className={style.itemBlock}>
      <div className={style.itemLike}>
        <img src="/img/like.svg" alt="" />
      </div>
      <div className={style.itemContainer}>
        <div className={style.itemMessage}>
          <img src="/img/message.jpg" alt="" />
        </div>
        <div>
          <p className={style.itemId}>
            ID:{" "}
            <a href={joke.url}>
              {joke.id}{" "}
              <img className={style.itemLink} src="/img/link.svg" alt="" />{" "}
            </a>
          </p>
          <p className={style.itemText}>{joke.value}</p>
          <div className={style.itemInfo}>
            <span className={style.itemData}>
              Last update: {joke.updated_at}
            </span>
            <span>{joke.categories}</span>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Item;
