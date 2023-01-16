import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {NOT_FOUND_SAVED_MOVIES_MESSAGE} from "../../utils/constants";

function SavedMovies({savedMovies, onRemove, actualValue, searchMovies, handleCheckbox, isShortMovie, isRequested}) {
    return (
        <main>
            <SearchForm searchMovies={searchMovies}
                        handleCheckbox={handleCheckbox}
                        isShortMovie={isShortMovie}
                        actualValue={actualValue} />
            {isRequested ? <Preloader/> : null}
            {!isRequested && !savedMovies.length ? (
                <p className='saved-movies__error-message'>{NOT_FOUND_SAVED_MOVIES_MESSAGE}</p>
            ) : null}
            <MoviesCardList movies={savedMovies} onRemove={onRemove}/>
        </main>
    )
}

export default SavedMovies
