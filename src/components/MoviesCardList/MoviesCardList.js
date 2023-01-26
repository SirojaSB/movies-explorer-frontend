import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({movies, onSave, onRemove}) {

    return (
        <div className='movies-card-list'>
            <ul className='movies-card-list__cards'>
                {movies.map((movie) =>(
                    <MoviesCard
                        key={movie.movieId}
                        movie={movie}
                        poster={movie.image}
                        filmName={movie.nameRU}
                        filmTime={movie.duration}
                        movieId={movie.movieId}
                        trailerLink={movie.trailerLink}
                        onSave={onSave}
                        onRemove={onRemove}/>
                    )
                )}
            </ul>
        </div>
    )
}

export default MoviesCardList
