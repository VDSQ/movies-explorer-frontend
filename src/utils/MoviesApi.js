import { MOVIES_URL, HEADERS } from "./config";

class MoviesApi {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _parseResult = (result) => {
    if (result) {
      return result.json();
    }

    return Promise.reject("Ошибка: ".concat(result.status));
  };

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then((result) => this._parseResult(result));
  }
}

const moviesApi = new MoviesApi(MOVIES_URL, HEADERS);

export { moviesApi };
