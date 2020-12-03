import React from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer} from '../../components/Container';

function MoviePresenter({movieData}){
    console.log(movieData.latest)
    return(
        <PaddingContainer>
            {
                movieData.nowPlayingMovie ? movieData.nowPlayingMovie.map(item=> {
                    return (
                        <Poster key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                    )
                    
                }) : null
            }   
            {
                movieData.latestMovie ? (<Poster title={movieData.latestMovie.original_title} poster_path={movieData.latestMovie.poster_path} overview={movieData.latestMovie.overview}/>): null
            }
            {
                movieData.popularMovie ? movieData.popularMovie.map(item=>{
                    return (
                        <Poster key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                    )
                }) : null
            }
            {
                movieData.upcomingMovie ? movieData.upcomingMovie.map(item=>{
                    return (
                        <Poster key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                    )
                }) : null
            }
            
        </PaddingContainer>
    );
}

export default MoviePresenter;



