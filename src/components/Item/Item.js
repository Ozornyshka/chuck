import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVOURITE, DELETE_FAVOURITE } from "../Favourite/store/actions";

import style from "./style.module.css";

function Item({ joke }) {
  const dispatch = useDispatch();
  const favouriteJokes = useSelector((state) => state.favourite);
  const like = Boolean(favouriteJokes.find(({ id }) => id === joke.id));

  function newFavoriteJoke(id) {
    const newFavoriteJoke = favouriteJokes.filter((joke) => joke.id !== id);
    dispatch({ type: DELETE_FAVOURITE, payload: newFavoriteJoke });
  }

  return (
    <div className={style.itemBlock}>
      {like ? (
        <div className={style.itemLike}>
          <img
            src="/img/like.svg"
            alt="like"
            onClick={() => newFavoriteJoke(joke.id)}
          />
        </div>
      ) : (
        <div className={style.itemLike}>
          <img
            src="/img/unlike.svg"
            alt="like"
            onClick={() => dispatch({ type: ADD_FAVOURITE, payload: joke })}
          />
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
  );
}

export default Item;
