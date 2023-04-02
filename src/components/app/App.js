import { useEffect, useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";
import SearchPanel from "../searchPanel/SearchPanel";

function App() {
    const [basketState, setBasketState] = useState(false);
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        fetch("https://6429973eebb1476fcc4ca5c5.mockapi.io/sneakers")
            .then(res => {
                return res.json();
            })
            .then(json => setSneakers(json));
    }, []);

    return (
        <div className="app">
            <AppHeader openBasket={() => setBasketState(true)} />
            <SearchPanel />
            <main>
                <CardsList arr={sneakers} />
                {basketState && (
                    <BasketList closeBasket={() => setBasketState(false)} />
                )}
            </main>
        </div>
    );
}

export default App;
