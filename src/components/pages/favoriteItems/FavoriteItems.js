import CardItem from "../../cardItem/CardItem";

import styles from "./favoriteItems.module.scss";

const FavoriteItems = ({ arr, favorited, onAddToFavorite }) => {
    const items = arr.map(item => {
        const { id, ...itemProps } = item;
        return (
            <CardItem
                key={id}
                {...itemProps}
                onAddToFavorite={onAddToFavorite}
            />
        );
    });

    return (
        <>
            <div className={styles.header}>
                <h1>Мои закладки</h1>
            </div>

            <div className={styles.wrapper}>{items}</div>
        </>
    );
};

export { FavoriteItems };
