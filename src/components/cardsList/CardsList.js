
import heart from '../../resources/img/heart.svg';
import heart_red from '../../resources/img/heart_red.svg';

import styles from './cardsList.module.scss';

console.log(styles);

const CardsList = ({arr}) => {

    const cards = arr.map(card => {
        const {name, price, id, imgSrc} = card;
        
        return (
            <div className={styles.card}>
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
    rx={6.5}
    fill="#fff"
    stroke="#F8F8F8"
    />
    <path
    d="M21.149 11.356a3.71 3.71 0 0 0-1.178-.773h-.001a3.754 3.754 0 0 0-1.439-.283h-.002c-.694 0-1.37.189-1.957.544-.14.085-.273.178-.399.279l-.439.353-.439-.353a3.778 3.778 0 0 0-2.356-.823c-.502 0-.984.095-1.44.283h-.001a3.701 3.701 0 0 0-1.178.773h-.001a3.573 3.573 0 0 0-.793 1.146l11.623-1.146Zm0 0c.337.328.607.717.794 1.146.194.447.292.918.29 1.404v.002c0 .455-.093.943-.291 1.457v.002m-.793-4.011.792 4.01m-9.561 3.747a24.523 24.523 0 0 0 3.035 2.355l.012.007.306.195.307-.195a24.565 24.565 0 0 0 3.047-2.362H12.38Zm0 0c-.905-.828-1.617-1.631-2.125-2.383m2.125 2.383-2.125-2.383m11.686-1.363a6.855 6.855 0 0 1-.73 1.363m.73-1.363-.73 1.363m-10.956 0a6.938 6.938 0 0 1-.73-1.365l.73 1.365Zm10.956 0c-.508.752-1.22 1.555-2.124 2.383l2.124-2.383ZM9.233 13.908c0-.487.099-.96.293-1.406l-.001 2.863a4.056 4.056 0 0 1-.292-1.457Z"
    stroke="#ECECEC"
    strokeWidth={1.4}
    />
            </svg>
            <img src={imgSrc} alt={id}/>
            <div className={styles.descr}>{name}</div>
            <div className={styles.price}>
                <div>
                    <div className={styles.subtitle}>Цена:</div>
                    <div className={styles.amount}>{price} руб.</div>
                </div>
                <button className={styles.btn}></button>
            </div>
        </div>
        )
    })

    return (
        <div className={styles.wrapper}>
            {cards}
        </div>
    )
}

export default CardsList;