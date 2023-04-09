import CardItem from "../../cardItem/CardItem";

import styles from "./favoriteItems.module.scss";

const FavoriteItems = ({ arr, favorited, onAddToFavorite }) => {
    const cards = arr.map(card => {
        const { id, ...cardProps } = card;
        return (
            <CardItem
                key={id}
                {...cardProps}
                onAddToFavorite={obj => onAddToFavorite(obj)}
            />
        );
    });

    return (
        <>
            <div className={styles.header}>
                <h1>Мои закладки</h1>
            </div>

            <div className={styles.wrapper}>{cards}</div>
        </>
    );
};

export { FavoriteItems };
