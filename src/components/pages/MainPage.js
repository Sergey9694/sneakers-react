import { useState, useEffect } from "react";
import axios from "axios";

import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";

const MainPage = () => {
    const [basketState, setBasketState] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    const [favorites, setFavorites] = useState([]);

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

    const onRemoveSneakers = id => {
        setBasketItems(
            basketItems => basketItems.filter(item => item.id !== id) // оставляет только те id которые не совпадают с приходящим id
        );
        axios.delete(
            `https://6429973eebb1476fcc4ca5c5.mockapi.io/basket/${id}` // удаляет кросы с бекенда по нужному id
        );
    };

    // Отправляет запрос на добавление на бекенд товаров из корзины из фронта
    const onAddToBasket = obj => {
        axios.post("https://6429973eebb1476fcc4ca5c5.mockapi.io/basket", obj);
        setBasketItems(basketItems => [...basketItems, obj]);
    };

    const onAddToFavorite = obj => {
        axios.post(
            "https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites",
            obj
        );
        setFavorites(favorites => [...favorites, obj]);
    };

    return (
        <>
            <AppHeader onOpenBasket={() => setBasketState(true)} />
            <CardsList
                arr={sneakers}
                onAddToBasket={obj => onAddToBasket(obj)}
                onAddToFavorite={obj => onAddToFavorite(obj)}
            />
            {basketState && (
                <BasketList
                    items={basketItems}
                    onCloseBasket={() => setBasketState(false)}
                    onRemoveSneakers={onRemoveSneakers}
                />
            )}
        </>
    );
};

export { MainPage };
