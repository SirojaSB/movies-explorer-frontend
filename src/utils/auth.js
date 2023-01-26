export const baseUrl = 'https://api.movies-siroja.nomoredomains.club'

const request = ({
                     url,
                     method = 'POST',
                     token,
                     data,
                 }) => {
    return fetch(`${baseUrl}${url}`, {
        method,
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json",
            ...!!token && { 'Authorization': `Bearer ${token}` },
        },
        ...!!data && { body: JSON.stringify(data) },
    })
        .then(getJsonOrError);
}

const getJsonOrError = async (res) => {
    if (res.ok){
        return res.json();
    }
    const err = await res.json()

    return Promise.reject(err);
}

export const register = (name, password, email) => {
    return request({
        url: '/signup',
        data: {name, password, email},
    })
}

export const authorize = (password, email) => {
    return request({
        url: '/signin',
        data: {password, email},
    })
}
