import { Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage";
import { FavoriteItems } from "../pages/FavoriteItems";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/favorites" element={<FavoriteItems />}></Route>
            </Routes>
        </div>
    );
}

export default App;
