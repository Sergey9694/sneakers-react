
import sneakers from '../../resources/img/sneakers.png'
import sneakers2 from '../../resources/img/sneakers2.png'
import sneakers3 from '../../resources/img/sneakers3.png'
import sneakers4 from '../../resources/img/sneakers4.png'

import './cardsList.scss';


const CardsList = () => {
    return (
        <div className="content">
            <h1>Все кроссовки</h1>
            <div className="cards__list">
                <div className="cards">
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

        </div> 
    )
}

export default CardsList;