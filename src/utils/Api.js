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
    async getMoviesList() {
        const response = await fetch(`${this._baseUrl}/?apikey=${this._token}&s=spider+man`);
        return onResponse(response);
    }
    // для поиска фильмов
    async searchMovies(str, type = "all") {
        const response = await fetch(`${this._baseUrl}/?apikey=${this._token}&s=${str}${type !== "all" ? `&type=${type}` : ""}`);
        return onResponse(response);
    }

}

const config = {
    baseUrl: "https://www.omdbapi.com",
    token: `${API_KEY}`
}

const api = new Api(config);
export default api;