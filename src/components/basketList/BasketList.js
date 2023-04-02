import "./basketList.scss";

import arrow from "../../resources/img/arrow.svg";
import sneakers from "../../resources/img/sneakers.png";

const BasketList = ({ closeBasket }) => {
    return (
        <div className="basket__overlay">
            <div className="basket__block">
                <div className="basket__title">
                    <h2>Корзина</h2>
                    <div class="basket__title-close" onClick={closeBasket}>
                        &times;
                    </div>
                </div>
                <div className="basket__items">
                    <div className="basket__item">
                        <img src={sneakers} alt="sneakers" />
                        <div className="basket__item-descr">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="basket__item-btn">
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
                    <div className="basket__item">
                        <img src={sneakers} alt="sneakers" />
                        <div className="basket__item-descr">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="basket__item-btn">
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
                    <div className="basket__item">
                        <img src={sneakers} alt="sneakers" />
                        <div className="basket__item-descr">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <div className="basket__item-btn">
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
                </div>
                <ul className="basket__subtitle">
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
                <button className="btn-green">
                    Оформить заказ <img src={arrow} alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default BasketList;
