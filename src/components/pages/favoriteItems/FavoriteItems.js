import CardItem from "../../cardItem/CardItem";

import styles from "./favoriteItems.module.scss";

const FavoriteItems = ({ arr, onAddToFavorite }) => {
    const items = arr.map(item => {
        const { idSneakers: id, name, price, imgSrc } = item;
        return (
            <CardItem
                key={id}
                id={id}
                name={name}
                price={price}
                imgSrc={imgSrc}
                favorited={true}
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
