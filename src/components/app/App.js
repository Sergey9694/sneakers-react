import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";

import { CardsPage, FavoriteItems } from "../pages";

function App() {
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
        axios
            .get("https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites")
            .then(res => {
                setFavorites(res.data); //получаем нужные кросы в избранное
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
        console.log(obj);
        if (favorites.find(favObj => favObj.id === obj.id)) {
            axios.delete(
                `https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites/${obj.id}`
            );
            setFavorites(favorites =>
                favorites.filter(item => item.id !== obj.id)
            );
        } else {
            axios.post(
                "https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites",
                obj
            );
            setFavorites(favorites => [...favorites, obj]);
        }
    };

    return (
        <div className="app">
            <AppHeader onOpenBasket={() => setBasketState(true)} />

            {basketState && (
                <BasketList
                    items={basketItems}
                    onCloseBasket={() => setBasketState(false)}
                    onRemoveSneakers={onRemoveSneakers}
                />
            )}
            <Routes>
                <Route
                    path="/"
                    element={
                        <CardsPage
                            arr={sneakers}
                            onAddToBasket={obj => onAddToBasket(obj)}
                            onAddToFavorite={obj => onAddToFavorite(obj)}
                        />
                    }
                ></Route>
                <Route
                    path="/favorites"
                    element={
                        <FavoriteItems
                            arr={favorites}
                            onAddToFavorite={obj => onAddToFavorite(obj)}
                            favorited={false}
                        />
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
