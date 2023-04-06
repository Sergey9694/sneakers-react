import { useEffect, useState } from "react";
import axios from "axios";
import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";

function App() {
    const [basketState, setBasketState] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        axios
            .get("https://6429973eebb1476fcc4ca5c5.mockapi.io/sneakers")
            .then(res => {
                setSneakers(res.data); //получаем все кросы
            });
        axios
            .get("https://6429973eebb1476fcc4ca5c5.mockapi.io/basket")
            .then(res => {
                setBasketItems(res.data); //получаем нужные кросы в корзину
            });
    }, []);
    // add Sneakers to Basket
    const onAddToBasket = obj => {
        axios.post("https://6429973eebb1476fcc4ca5c5.mockapi.io/basket", obj);
        setBasketItems(basketItems => [...basketItems, obj]);
    };

    const onRemoveSneakers = id => {
        setBasketItems(
            basketItems => basketItems.filter(item => item.id !== id) // оставляет только те id которые не совпадают с приходящим id
        );
        axios.delete(
            `https://6429973eebb1476fcc4ca5c5.mockapi.io/basket/${id}` // удаляет кросы с бекенда
        );
    };

    return (
        <div className="app">
            <AppHeader onOpenBasket={() => setBasketState(true)} />
            <main>
                <CardsList
                    arr={sneakers}
                    onAddToBasket={obj => onAddToBasket(obj)}
                />
                {basketState && (
                    <BasketList
                        items={basketItems}
                        onCloseBasket={() => setBasketState(false)}
                        onRemoveSneakers={onRemoveSneakers}
                    />
                )}
            </main>
        </div>
    );
}

export default App;
