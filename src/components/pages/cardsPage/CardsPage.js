import CardItem from "../../cardItem/CardItem";
import { useState } from "react";

import styles from "./cardsPage.module.scss";

const CardsPage = ({ arr, onAddToBasket, onAddToFavorite, basketItems }) => {
    const [searchValue, setSearchValue] = useState("");

    const onSearchChangeInput = e => {
        setSearchValue(e.target.value);
    };

    const cards = arr
        .filter(card => card.name.toLowerCase().includes(searchValue)) // фильтр перед возвратом нового массива
        .map(card => {
            const { id, name, price, imgSrc } = card;
            return (
                <CardItem
                    key={card.id}
                    id={id}
                    name={name}
                    price={price}
                    imgSrc={imgSrc}
                    onAddToBasket={onAddToBasket}
                    onAddToFavorite={onAddToFavorite}
                    added={basketItems.some(
                        obj => Number(obj.idBasket) === Number(card.id)
                    )}
                />
            );
        });

    return (
        <>
            <div className={styles.header}>
                <h1>
                    {searchValue
                        ? `Поиск по запросу: "${searchValue.slice(0, 30)}"...`
                        : "Все кроссовки"}
                </h1>
                <div className={styles.block}>
                    <svg
                        width={16}
                        height={16}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m15.25 15.25-3.364-3.37 3.364 3.37Zm-1.5-7.875a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0v0Z"
                            stroke="#E4E4E4"
                            strokeWidth={2}
                            strokeLinecap="round"
                        />
                    </svg>
                    {searchValue && (
                        <div
                            className={styles.clear}
                            onClick={() => setSearchValue("")}
                        >
                            &times;
                        </div>
                    )}
                    <input
                        value={searchValue}
                        onChange={onSearchChangeInput}
                        type="text"
                        placeholder="Поиск..."
                    />
                </div>
            </div>
            <div className={styles.wrapper}>{cards}</div>
        </>
    );
};

export { CardsPage };
