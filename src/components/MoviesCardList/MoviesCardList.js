import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import film1 from '../../images/film1.png';
import film2 from '../../images/film2.png';
import film3 from '../../images/film3.png';
import film4 from '../../images/film4.png';

function MoviesCardList() {
    return (
        <div className='movies-card-list'>
            <ul className='movies-card-list__cards'>
                <MoviesCard poster={film1} filmName='33 слова о дизайне' filmTime='1ч 17м'/>
                <MoviesCard poster={film2} filmName='Киноальманах «100 лет дизайна»' filmTime='1ч 17м'/>
                <MoviesCard poster={film3} filmName='В погоне за Бенкси' filmTime='1ч 17м'/>
                <MoviesCard poster={film4} filmName='Баския: Взрыв реальности' filmTime='1ч 17м'/>
            </ul>
        </div>
    )
}

export default MoviesCardList
