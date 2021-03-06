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
    detail : id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    videos : (id) => api.get(`movie/${id}/videos`)   
    
}

export const tvReq = {
    latest : () => api.get("tv/latest"),
    airingToday : () => api.get("tv/airing_today"),
    popular : () => api.get("tv/popular"),
    detail : (id) => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    videos : (id) => api.get(`tv/${id}/videos`)
}

export const searchMovieReq = {
    search : (keyword) => api.get("search/movie", {
        params:{
            query:encodeURIComponent(keyword)
        }
    })
}

export const searchTVReq = {
    searchTV : (keyword) => api.get("search/tv",{
        params : {
            query:encodeURIComponent(keyword)
        }
    })
}