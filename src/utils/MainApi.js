class MainApi {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    async _getJsonOrError(res) {
        if (res.ok){
            return res.json();
        }
        const err = await res.json()

        return Promise.reject(err);
    }

    getUserInfo(token){
        return fetch(`${this._baseUrl}/users/me`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    updateUserInfo(data, token){
        return fetch(`${this._baseUrl}/users/me`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then(this._getJsonOrError);
    }

    getSavedMovies(token){
        return fetch(`${this._baseUrl}/movies`,{
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }

    saveMovie(data, token){
        return fetch(`${this._baseUrl}/movies`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
            credentials: 'include',
        })
            .then(this._getJsonOrError);
    }

    deleteMovie(id, token){
        return fetch(`${this._baseUrl}/movies/${id}`,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(this._getJsonOrError);
    }
}

export const mainApi = new MainApi({
    baseUrl: 'https://api.movies-siroja.nomoredomains.club',
})
