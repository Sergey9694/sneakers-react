import AppHeader from "../appHeader/AppHeader";
import CardsList from "../cardsList/CardsList";

function App() {
  return (
    <div className="app">
		<AppHeader/>
		<main>
			<CardsList/>
		</main>
    </div>
  );
}

export default App;
