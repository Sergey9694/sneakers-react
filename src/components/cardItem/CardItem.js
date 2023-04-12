import { useState } from "react";

import btnPlus from "../../resources/img/btn-plus.svg";
import greenChecked from "../../resources/img/cheked.svg";
import heartRed from "../../resources/img/heart_red.svg";
import heart from "../../resources/img/heart.svg";

import styles from "./cardItem.module.scss";

const CardItem = ({
    id,
    name,
    price,
    imgSrc,
    onAddToBasket,
    onAddToFavorite,
    favorited = true,
}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const changeBtnAddToBasket = () => {
        setIsAdded(!isAdded);
        onAddToBasket({ name, price, imgSrc });
    };

    const onFavorite = () => {
        setIsFavorite(!isFavorite);
        onAddToFavorite({ id, name, price, imgSrc });
    };

    return (
        <div>
            <div className={styles.card}>
                <img
                    className={styles.heart}
                    src={isFavorite ? heartRed : heart}
                    alt="heart"
                    onClick={onFavorite}
                ></img>
                <img className={styles.item} src={imgSrc} alt="sneakers" />
                <div className={styles.descr}>{name}</div>
                <div className={styles.price}>
                    <div className={styles.subtitle}>
                        Цена: <br />
                        <p className={styles.amount}>{price} руб.</p>
                    </div>
                    <img
                        className={styles.btn}
                        src={isAdded ? greenChecked : btnPlus}
                        alt="btn"
                        onClick={changeBtnAddToBasket}
                    ></img>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
