import React, {useState, useEffect, useContext} from 'react';
import { movieReq, searchMovieReq } from '../../api/api';
import SearchContext from '../../components/Context';
import MoviePresenter from './MoviePresenter';
import Loading from '../../components/Loading';

function MovieContainer(){

    const [load, setLoad] = useState(false);
    const [movieData, setMovieData] = useState({});
    const {search} = useContext(SearchContext);
    const [movieSearchData, setMovieSearchData] = useState([]);

    const getMovie = async () =>{
        try{
            setLoad(true)
            const {data:latestMovie} = await movieReq.latest();
            const {data:{results:nowPlayingMovie}} = await movieReq.nowPlaying();
            const {data:{results:popularMovie}} = await movieReq.popular();
            const {data:{results:upcomingMovie}} = await movieReq.upcoming();
            const {data : {results : videosMovie}} = await movieReq.videos(nowPlayingMovie[Math.floor(Math.random()*19)].id);
            
            let MovievideosKey = null;

            if(videosMovie.length !== 0){
                MovievideosKey = videosMovie[0].key;
            }
        
            setMovieData({
                nowPlayingMovie,
                popularMovie,
                upcomingMovie,
                latestMovie,
                MovievideosKey
            });
        }catch(error){
            console.log(error)
        }finally{
            setLoad(false)
        } 
    }

    const getMovieSearchData = async () =>{
        try{
            if(search === ""){
                setMovieSearchData(null);
            }else{
                const {data : {results : searchMovie}} = await searchMovieReq.search(search);
              
                setMovieSearchData([...searchMovie])
            }
        }catch(error){
            console.log(error)
        }        
    }

    useEffect(()=>{
        getMovie();
    },[])

    useEffect(()=>{
        getMovieSearchData();
    },[search])

    return(
        <>
            {
                load ? <Loading /> : (<MoviePresenter movieSearchData={movieSearchData} movieData={movieData}/>) 
            } 
        </>               
    );
}

export default MovieContainer;

