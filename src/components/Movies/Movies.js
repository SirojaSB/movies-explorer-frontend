import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {NOT_FOUND_MOVIES_MESSAGE, WITHOUT_SEARCH_MESSAGE} from "../../utils/constants";
import {useEffect, useState} from "react";

function Movies({
            searchMovies,
            onToggle,
            movies,
            addMoreCards,
            hideAddCardsBtn,
            onSave,
            onRemove,
            isRequested,
            isFirstSearch
}) {
    const [searchValue, setSearchValue] = useState( localStorage.getItem('requestedText') || '')
    const [isShortMovie, setIsShortMovie] = useState( JSON.parse(sessionStorage.getItem('checkbox')) || false)

    const handleCheckbox = () => {
        if (isShortMovie) {
            setIsShortMovie(false)
        } else {
            setIsShortMovie(true)
        }
    }

    const onChange = (e) => {
        setSearchValue(e.target.value)
    }

    const onSubmit = () => {
        searchMovies(searchValue, isShortMovie)
    }

    useEffect(() => {
        onToggle(searchValue, isShortMovie)
    }, [isShortMovie])

    return (
        <main className='movies__content'>
            <SearchForm onSubmit={onSubmit}
                        searchValue={searchValue}
                        handleCheckbox={handleCheckbox}
                        isShortMovie={isShortMovie}
                        onChange={onChange}/>
            {isRequested ? <Preloader/> : null}
            {!isRequested && !movies.length ? (
                <p className='movies__error-message'>{isFirstSearch ? WITHOUT_SEARCH_MESSAGE : NOT_FOUND_MOVIES_MESSAGE}</p>
            ) : null}
            <MoviesCardList movies={movies} onSave={onSave} onRemove={onRemove}/>
            {!hideAddCardsBtn ? (
                <button className='movies__btn' type='button' onClick={addMoreCards}>Ещё</button>
            ) : null}
        </main>
    )
}

export default Movies
