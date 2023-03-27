import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";
import SearchPanel from "../searchPanel/SearchPanel";

function App() {
  return (
    <div className="app">
		<AppHeader/>
		<SearchPanel/>
		<main>
			<CardsList/>
			<BasketList/>
		</main>
    </div>
  );
}

export default App;
