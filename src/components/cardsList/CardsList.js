
import sneakers from '../../resources/img/sneakers.png';
import sneakers2 from '../../resources/img/sneakers2.png';
import sneakers3 from '../../resources/img/sneakers3.png';
import sneakers4 from '../../resources/img/sneakers4.png';
import heart from '../../resources/img/heart.svg';
import heart_red from '../../resources/img/heart_red.svg';

import './cardsList.scss';


const CardsList = () => {
    return (
        <div className="cards__list">
            <div className="cards">
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
                <img src={sneakers} alt="sneakers"/>
                <div className="cards__descr">Мужские Кроссовки Nike Blazer Mid Suede</div>
                <div className="cards__price">
                    <div className="cards__text">
                        <div className="cards__subtitle">Цена:</div>
                        <div className="cards__amount">12 999 руб.</div>
                    </div>
                    <button className='cards__btn'></button>
                </div>
            </div>
            <div className="cards">
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
                <img src={sneakers2} alt="sneakers"/>
                <div className="cards__descr">Мужские Кроссовки Nike Blazer Mid Suede</div>
                <div className="cards__price">
                    <div className="cards__text">
                        <div className="cards__subtitle">Цена:</div>
                        <div className="cards__amount">12 999 руб.</div>
                    </div>
                    <button className='cards__btn'></button>
                </div>
            </div>
            <div className="cards">
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
                <img src={sneakers3} alt="sneakers"/>
                <div className="cards__descr">Мужские Кроссовки Nike Blazer Mid Suede</div>
                <div className="cards__price">
                    <div className="cards__text">
                        <div className="cards__subtitle">Цена:</div>
                        <div className="cards__amount">12 999 руб.</div>
                    </div>
                    <button className='cards__btn'></button>
                </div>
            </div>
            <div className="cards">
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
                <img src={sneakers4} alt="sneakers"/>
                <div className="cards__descr">Мужские Кроссовки Nike Blazer Mid Suede</div>
                <div className="cards__price">
                    <div className="cards__text">
                        <div className="cards__subtitle">Цена:</div>
                        <div className="cards__amount">12 999 руб.</div>
                    </div>
                    <button className='cards__btn'></button>
                </div>
            </div>
        </div>
    )
}

export default CardsList;