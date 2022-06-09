const API_KEY = process.env.REACT_APP_API_KEY;
const onResponse = (response) => {
    return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
class Api {
    constructor({ baseUrl, token }) {
        this._baseUrl = baseUrl;
        this._token = token;
    }
    // получение всех фильмов
    getMoviesList() {
        return fetch(`${this._baseUrl}/?apikey=${this._token}&s=matrix`)
            .then(onResponse)
    }
    // для поиска фильмов
    searchMovies(str = "matrix", type = "all") {
        return fetch(`${this._baseUrl}/?apikey=${this._token}&s=${str}${
            type !== "all" ? `&type=${type}` : ""}`)
            .then(onResponse)
    }

}

const config = {
    baseUrl: "https://www.omdbapi.com",
    token: `${API_KEY}`
}

const api = new Api(config);
export default api;