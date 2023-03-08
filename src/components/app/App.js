import AppHeader from "../appHeader/AppHeader";
import CardsList from "../cardsList/CardsList";
import SearchPanel from "../searchPanel/SearchPanel";

function App() {
  return (
    <div className="app">
		<AppHeader/>
		<SearchPanel/>
		<main>
			<CardsList/>
		</main>
    </div>
  );
}

export default App;
