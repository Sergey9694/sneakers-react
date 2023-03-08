
import './searchPanel.scss';

const SearchPanel = () => {
    return (
        <div className="content">
            <h1>Все кроссовки</h1>
            <div className="search__block">
                <svg
                    width={16}
                    height={16}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="m15.25 15.25-3.364-3.37 3.364 3.37Zm-1.5-7.875a6.375 6.375 0 1 1-12.75 0 6.375 6.375 0 0 1 12.75 0v0Z"
                    stroke="#E4E4E4"
                    strokeWidth={2}
                    strokeLinecap="round"
                    />
                </svg>
                <input type="text" placeholder='Поиск...' />
            </div>
        </div> 
    )
}

export default SearchPanel;