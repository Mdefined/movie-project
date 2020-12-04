import React, {useState, useEffect} from 'react';
import HomePresenter from './HomePresenter';
import {movieReq, tvReq} from '../../api/api';

function HomeContainer(){

    const [load, setLoad] = useState(true);
    const [error, setError] = useState("");
    const [moviedata, setMoviedata] = useState({});
    const [tvdata, setTVData] = useState({});

    const getMovie = async () =>{
        try{
            const {data:{results:popularMovie}} = await movieReq.popular();
            const {data:latestMovie } = await movieReq.latest();
            const {data:{results:nowPlayingMovie}} = await movieReq.nowPlaying();
            const {data:{results:upcomingMovie}} = await movieReq.upcoming();
        
            setLoad(false);
            setMoviedata({
                popularMovie,
                latestMovie,
                nowPlayingMovie,
                upcomingMovie
            });
        }catch(error){
            setError(error);
        }
    }

    const getTV = async () => {
        try{
            const {data : lastestTV} = await tvReq.latest();
            const {data : {result : airingTodayTV}} = await tvReq.airingToday();
            const {data : {result : popularTV}} = await tvReq.popular();  
            
            setTVData({
                lastestTV,
                airingTodayTV,
                popularTV
            })
        }catch(error){
            console.log(error);
        }finally{
            setError(false); // 이게 모야 -ㅅ-
        }
    }

    useEffect(() => {
        getMovie();
        getTV();
    },[])


    return(
        <>
            {load ? "로딩중" : (<HomePresenter moviedata={moviedata} tvdata={tvdata}/>)}
        </>
    );
}

export default HomeContainer;