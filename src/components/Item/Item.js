import { useDispatch } from "react-redux";
import { ADD_FAVOURITE } from "../Favourite/store/actions";
import { SET_LIKE } from "../FormSearch/store/actions";

import style from "./style.module.css";

function Item({ joke }) {
  const dispatch = useDispatch();

  return joke.value.length > 0 ? (
    <div className={style.itemBlock}>
      {joke.like ? (
        <div
          className={style.itemLike}
          onClick={() => dispatch({ type: SET_LIKE, payload: !joke.like })}
        >
          <img src="/img/like.svg" alt="" />
        </div>
      ) : (
        <div
          className={style.itemLike}
          onClick={() => dispatch({ type: ADD_FAVOURITE, payload: joke })}
        >
          <img src="/img/unlike.svg" alt="" />
        </div>
      )}
      <div className={style.itemContainer}>
        <div className={style.itemMessage}>
          <img src="/img/message.jpg" alt="" />
        </div>
        <div className={style.itemContent}>
          <p className={style.itemId}>
            ID:
            <a href={joke.url} target="_blank" rel="noreferrer">
              {joke.id}
              <img className={style.itemLink} src="/img/link.svg" alt="" />{" "}
            </a>
          </p>
          <p className={style.itemText}>{joke.value}</p>
          <div className={style.itemInfo}>
            <span className={style.itemData}>
              Last update: {joke.updated_at.substring(0, 10)}
            </span>
            {joke.categories.length > 0 ? (
              <span className={style.itemCategories}>{joke.categories}</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Item;
