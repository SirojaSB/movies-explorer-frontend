import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {NOT_FOUND_SAVED_MOVIES_MESSAGE} from "../../utils/constants";
import {useState} from "react";

function SavedMovies({savedMovies, onRemove, searchMovies, isRequested}) {

    const [searchValue, setSearchValue] = useState( '')
    const [isShortMovie, setIsShortMovie] = useState( false)

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

    return (
        <main>
            <SearchForm onSubmit={onSubmit}
                        onChange={onChange}
                        handleCheckbox={handleCheckbox}
                        isShortMovie={isShortMovie}
                        searchValue={searchValue} />
            {isRequested ? <Preloader/> : null}
            {!isRequested && !savedMovies.length ? (
                <p className='saved-movies__error-message'>{NOT_FOUND_SAVED_MOVIES_MESSAGE}</p>
            ) : null}
            <MoviesCardList movies={savedMovies} onRemove={onRemove}/>
        </main>
    )
}

export default SavedMovies
