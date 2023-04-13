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

    const [shouldUpdateFavorive, setShouldUpdateFavorive] = useState(false);
    const [shouldUpdateBasket, setShouldUpdateBasket] = useState(false);

    useEffect(() => {
        axios
            .get("https://6429973eebb1476fcc4ca5c5.mockapi.io/sneakers")
            .then(res => {
                setSneakers(res.data); //получаем все кросы
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://6429973eebb1476fcc4ca5c5.mockapi.io/basket")
            .then(res => {
                setBasketItems(res.data); //получаем все кросы
            });
    }, [shouldUpdateBasket]);

    useEffect(() => {
        axios
            .get("https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites")
            .then(res => {
                setFavorites(res.data); //получаем нужные кросы в избранное
            });
    }, [shouldUpdateFavorive]);

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
        console.log("onAddToBasket", obj);
        const BaskObj = basketItems.find(
            BaskObj => BaskObj.idBasket === obj.idBasket
        );

        if (BaskObj) {
            axios
                .delete(
                    `https://6429973eebb1476fcc4ca5c5.mockapi.io/basket/${BaskObj.id}`
                )
                .then(_ => {
                    setShouldUpdateBasket(!shouldUpdateBasket);
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error, null, 2));
                });
        } else {
            axios
                .post("https://6429973eebb1476fcc4ca5c5.mockapi.io/basket", obj)
                .then(_ => setShouldUpdateBasket(!shouldUpdateBasket));
        }
    };

    const onAddToFavorite = obj => {
        console.log("onAddToFavorite", obj);
        const favObj = favorites.find(
            favObj => favObj.idSneakers === obj.idSneakers
        );
        if (favObj) {
            axios
                .delete(
                    `https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites/${favObj.id}`
                )
                .then(_ => {
                    setShouldUpdateFavorive(!shouldUpdateFavorive);
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error, null, 2));
                });
        } else {
            axios
                .post(
                    "https://642ed8c88ca0fe3352da6f90.mockapi.io/favorites",
                    obj
                )
                .then(_ => setShouldUpdateFavorive(!shouldUpdateFavorive));
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
                            basketItems={basketItems}
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
