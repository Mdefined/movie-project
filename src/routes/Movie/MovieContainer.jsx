import React, {useState, useEffect} from 'react';
import { movieReq } from '../../api/api';
import MoviePresenter from './MoviePresenter';

function MovieContainer(){

    const [load, setLoad] = useState(false);
    const [movieData, setMovieData] = useState({});

    const getMovie = async () =>{
        try{
            setLoad(true)
            const {data:latestMovie} = await movieReq.latest();
            const {data:{results:nowPlayingMovie}} = await movieReq.nowPlaying();
            const {data:{results:popularMovie}} = await movieReq.popular();
            const {data:{results:upcomingMovie}} = await movieReq.upcoming();
            console.log(latestMovie);
            setMovieData({
                nowPlayingMovie,
                popularMovie,
                upcomingMovie,
                latestMovie
            });
        }catch(error){
            console.log(error)
        }finally{
            setLoad(false)
        } 
    }

    useEffect(()=>{
        getMovie();
    },[])

    return(
        <>
            {
                load ? null : (<MoviePresenter movieData={movieData}/>) 
            } 
        </>               
    );
}

export default MovieContainer;

