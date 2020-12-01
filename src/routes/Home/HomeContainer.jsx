import React, {useState, useEffect} from 'react';
import HomePresenter from './HomePresenter';
import {movieReq} from '../../api/api';

function HomeContainer(){

    const [load, setLoad] = useState(true);
    const [error, setError] = useState("");
    const [moviedata, setMoviedata] = useState({});

    const getMovie = async () =>{
        try{
            const {data:{results:popular}} = await movieReq.popular();
            const {data:latest } = await movieReq.latest();
            const {data:{results:nowPlaying}} = await movieReq.nowPlaying();
            const {data:{results:upcoming}} = await movieReq.upcoming();
            console.log(popular,latest,nowPlaying,upcoming);
            setLoad(false);
            setMoviedata({
                popular,
                latest,
                nowPlaying,
                upcoming
            })
        }catch(error){
            setError(error);
        }
        
    }

    useEffect(() => {
        getMovie();
    },[])


    return(
        <>
            {load ? "로딩중" : (<HomePresenter moviedata={moviedata}/>)}
        </>
    );
}

export default HomeContainer;