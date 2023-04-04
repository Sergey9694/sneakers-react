import arrow from "../../resources/img/arrow.svg";
import sneakers from "../../resources/img/sneakers.png";

import styles from "../basketList/basketList.module.scss";

const BasketList = ({ onCloseBasket, items = [] }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <h2>Корзина</h2>
                    <div class={styles.close} onClick={onCloseBasket}>
                        &times;
                    </div>
                </div>
                <div className={styles.items}>
                    {items.map(item => {
                        return (
                            <div className={styles.item}>
                                <img src={item.imgSrc} alt="sneakers" />
                                <div className={styles.descr}>
                                    <p>{item.name}</p>
                                    <b>{item.price}</b>
                                </div>
                                <div className={styles.btn}>
                                    <svg
                                        width={32}
                                        height={32}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x={0.5}
                                            y={0.5}
                                            width={31}
                                            height={31}
                                            rx={7.5}
                                            fill="#fff"
                                            stroke="#DBDBDB"
                                        />
                                        <path
                                            d="m20.08 18.616-2.449-2.45 2.449-2.448c.944-.944-.52-2.409-1.465-1.464l-2.448 2.448-2.45-2.448c-.943-.944-2.408.52-1.463 1.464l2.448 2.449-2.448 2.448c-.945.945.52 2.41 1.464 1.465l2.449-2.449 2.448 2.449c.945.944 2.41-.52 1.465-1.464Z"
                                            fill="#B5B5B5"
                                        />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.footer}>
                    <li>
                        <span>Итого:</span>
                        <div className="divider"></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className={styles.submit}>
                    Оформить заказ <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default BasketList;
