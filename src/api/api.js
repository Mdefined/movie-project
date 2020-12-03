import axios from 'axios';

const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        api_key : "464feef272472a8fe5bf555efdea3643",
        language : "en-US",
    }
})

export const movieReq = {
    latest : () => api.get("movie/latest"),
    nowPlaying : () => api.get("movie/now_playing"),
    popular : () => api.get("movie/popular"),
    upcoming : () => api.get("movie/upcoming"),
    detail : (id) => api.get(`movie/${id}`),
}

export const tvReq = {
    latest : () => api.get("tv/latest"),
    airingToday : () => api.get("tv/airing_today"),
    popular : () => api.get("tv/popular")
}