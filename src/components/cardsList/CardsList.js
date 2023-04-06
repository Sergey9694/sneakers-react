import { useState } from "react";
import CardItem from "../cardItem/CardItem";

import styles from "./cardsList.module.scss";

const CardsList = ({ arr, onAddToBasket }) => {
    const [searchValue, setSearchValue] = useState("");

    const onSearchChangeInput = e => {
        setSearchValue(e.target.value);
    };

    const cards = arr
        .filter(card => card.name.toLowerCase().includes(searchValue)) // фильтр перед возвратом нового массива
        .map(card => {
            const { id, ...cardProps } = card;
            return (
                <CardItem
                    key={id}
                    {...cardProps}
                    onAddToBasket={onAddToBasket}
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

export default CardsList;
