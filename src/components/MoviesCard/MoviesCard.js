import like from '../../images/Like-icon.svg';
import removeBtn from '../../images/Remove-icon.svg';
import {useLocation} from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({movie, poster, filmName, filmTime, movieId, trailerLink, onSave, onRemove}) {
    const location = useLocation().pathname;
    const isMovies = location === '/movies';

    const handleSave = () => {
        onSave(movieId)
    }

    const handleRemove = () => {
        onRemove(movieId)
    }

    const handleSaveOrRemove = () => {
        movie.isSaved ? handleRemove() : handleSave()
    }

    const divineTimeByHours = () => {
        const hours = Math.floor(filmTime/60)
        const minutes = filmTime - hours * 60
        return hours ? `${hours}ч ${minutes}м` : `${minutes}м`
    }

    return (
        <li className='movies-card'>
            { isMovies ? (
                <button className={`movies-card__save-btn ${movie.isSaved && 'movies-card__save-btn_active'}`} type="button" onClick={handleSaveOrRemove}>
                    { movie.isSaved ? (
                        <>
                            <img className='movies-card__like-icon' src={like} alt="Иконка лайка"/>
                        </>
                    ) : 'Сохранить' }
                </button>
            ) : (<button className='movies-card__save-btn movies-card__save-btn_remove' type="button" onClick={handleRemove}>
                    <img className='movies-card__remove-icon' src={removeBtn} alt="Иконка удаления"/>
                </button>)
            }
            <a className='movies-card__trailer-link' href={trailerLink} target='_blank' rel='noreferrer'>
                <img className='movies-card__img' src={poster} alt={`Постер фильма ${filmName}`}/>
            </a>
            <div className='movies-card__info'>
                <p className='movies-card__name'>{filmName}</p>
                <p className='movies-card__time'>{divineTimeByHours()}</p>
            </div>
        </li>
    )
}

export default MoviesCard
