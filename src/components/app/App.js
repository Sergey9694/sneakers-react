import { useEffect, useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";

function App() {
    const [basketState, setBasketState] = useState(false);
    const [sneakers, setSneakers] = useState([]);
    const [basketItems, setBasketItems] = useState([]);

    useEffect(() => {
        fetch("https://6429973eebb1476fcc4ca5c5.mockapi.io/sneakers")
            .then(res => {
                return res.json();
            })
            .then(json => setSneakers(json));
    }, []);
    // add Sneakers to Basket
    const onAddToBasket = obj => {
        setBasketItems(basketItems => [...basketItems, obj]);
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
                    />
                )}
            </main>
        </div>
    );
}

export default App;
