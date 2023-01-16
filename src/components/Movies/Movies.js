import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {NOT_FOUND_MOVIES_MESSAGE} from "../../utils/constants";
import {useEffect} from "react";

function Movies({
            searchMovies,
            handleCheckbox,
            isShortMovie,
            onToggle,
            movies,
            addMoreCards,
            hideAddCardsBtn,
            actualValue,
            onSave,
            onRemove,
            isRequested
}) {

    useEffect(() => {
        onToggle(actualValue)
    }, [isShortMovie])

    return (
        <main className='movies__content'>
            <SearchForm searchMovies={searchMovies}
                        handleCheckbox={handleCheckbox}
                        isShortMovie={isShortMovie}
                        actualValue={actualValue}/>
            {isRequested ? <Preloader/> : null}
            {!isRequested && !movies.length ? (
                <p className='movies__error-message'>{NOT_FOUND_MOVIES_MESSAGE}</p>
            ) : null}
            <MoviesCardList movies={movies} onSave={onSave} onRemove={onRemove}/>
            {!hideAddCardsBtn ? (
                <button className='movies__btn' type='button' onClick={addMoreCards}>Ещё</button>
            ) : null}
        </main>
    )
}

export default Movies
