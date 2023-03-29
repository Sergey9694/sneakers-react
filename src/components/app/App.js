import AppHeader from "../appHeader/AppHeader";
import BasketList from "../basketList/BasketList";
import CardsList from "../cardsList/CardsList";
import SearchPanel from "../searchPanel/SearchPanel";




const arr = [
	{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, id: 'sneakers', imgSrc: 'sneakers2.png'},
	{name: 'Мужские Кроссовки Nike Air Max 270', price: 15600, id: 'sneakers2', imgSrc: 'sneakers2.png'},
	{name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, id: 'sneakers3', imgSrc: '../../resources/img/sneakers3.png'},
	{name: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, id: 'sneakers4', imgSrc: '../../resources/img/sneakers4.png'}
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
