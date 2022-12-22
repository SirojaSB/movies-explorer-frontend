import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
    return (
        <main className='movies__content'>
            <SearchForm />
            <MoviesCardList />
            <button className='movies__btn' type='button'>Ещё</button>
        </main>
    )
}

export default Movies
