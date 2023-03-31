import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";
import SearchPanel from "../searchPanel/SearchPanel";

import sneakers from '../../resources/img/sneakers.png';
import sneakers2 from '../../resources/img/sneakers2.png';
import sneakers3 from '../../resources/img/sneakers3.png';
import sneakers4 from '../../resources/img/sneakers4.png';

const arr = [
	{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, id: 'sneakers', imgSrc: sneakers},
	{name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, id: 'sneakers2', imgSrc: sneakers2},
	{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, id: 'sneakers3', imgSrc: sneakers3},
	{name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, id: 'sneakers4', imgSrc: sneakers4}
];

function App() {
  return (
    <div className="app">
		<AppHeader/>
		<SearchPanel/>
		<main>
			<CardsList arr={arr}/>
			<BasketList/>
		</main>
    </div>
  );
}

export default App;
