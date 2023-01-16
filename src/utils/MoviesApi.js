class MoviesApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    _renameResKeys(res) {
        return res.map(item => ({
            country: item.country,
            director: item.director,
            duration: item.duration,
            year: item.year,
            description: item.description,
            image: this._baseUrl + item.image.url,
            trailerLink: item.trailerLink,
            thumbnail: this._baseUrl + item.image.url,
            movieId: item.id,
            nameRU: item.nameRU,
            nameEN: item.nameEN
        }))
    }

    _getJsonOrError(res) {
        if (res.ok){
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies(){
        return fetch(`${this._baseUrl}/beatfilm-movies`,{
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(this._getJsonOrError)
                .then((res) => {
                    return this._renameResKeys(res)
                });
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
})
