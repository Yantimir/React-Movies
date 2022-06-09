const onResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}

const onError = (err) => {
    console.log(`${err}`);
}

class Api {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
        // this._token = token;
    }
    // получение всех фильмов
    getMoviesList() {
        return fetch(`${this._baseUrl}/?apikey=28dc1872&s=matrix`)
            .then(onResponse)
            .catch(onError)
    }
    // для поиска фильмов
    searchMivies(str, type = "all") {
        return fetch(`${this._baseUrl}/?apikey=28dc1872&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
            .then(onResponse)
            .catch(onError)
    }

}

const config = {
    baseUrl: "http://www.omdbapi.com",
}

const api = new Api(config);
export default api;