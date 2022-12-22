import like from '../../images/Like-icon.svg';
import removeBtn from '../../images/Remove-icon.svg';
import {useLocation} from 'react-router-dom';
import './MoviesCard.css';
import {useState} from "react";

function MoviesCard({poster, filmName, filmTime}) {
    const location = useLocation().pathname;
    const isMovies = location === '/movies';

    const [isLiked, setIsLiked] = useState(false)

    const handleLike = () => {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    return (
        <li className='movies-card'>
            { isMovies ? (
                <button className={`movies-card__save-btn ${isLiked && 'movies-card__save-btn_active'}`} type="button" onClick={handleLike}>
                    { isLiked ? (
                        <>
                            <img className='movies-card__like-icon' src={like} alt="Иконка лайка"/>
                        </>
                    ) : 'Сохранить' }
                </button>
            ) : (<button className='movies-card__save-btn movies-card__save-btn_remove' type="button">
                <img className='movies-card__remove-icon' src={removeBtn} alt="Иконка удаления"/>
            </button>)
            }

            <img className='movies-card__img' src={poster} alt={`Постер фильма ${filmName}`}/>
            <div className='movies-card__info'>
                <p className='movies-card__name'>{filmName}</p>
                <p className='movies-card__time'>{filmTime}</p>
            </div>
        </li>
    )
}

export default MoviesCard
