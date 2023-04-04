import CardItem from "../cardItem/CardItem";

import styles from "./cardsList.module.scss";

const CardsList = ({ arr, onAddToBasket }) => {
    const cards = arr.map((card) => {
        return <CardItem {...card} onAddToBasket={onAddToBasket} />;
    });

    return <div className={styles.wrapper}>{cards}</div>;
};

export default CardsList;
