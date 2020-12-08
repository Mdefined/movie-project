import React from 'react';
import Poster from '../../components/Poster';
import {PaddingContainer, ContentsContainer, VideoWtap} from '../../components/Container';


function MoviePresenter({movieData, movieSearchData}){

    if(!movieSearchData){
        return(
            <>
                {
                    movieData.MovievideosKey ? (
                        <VideoWtap>
                            <iframe 
                                width="100%" height="1200px" 
                                src={`https://www.youtube.com/embed/${movieData.MovievideosKey}?mute=1&control=0&autoplay=1&amp;loop=1`} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </VideoWtap>
                    ) : <img src={`http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieData.popularMovie[0].backdrop_path}`}/> 
                }
                <ContentsContainer>
                    <h2>MOVIE</h2>
                    <PaddingContainer>
                        {
                            movieData.nowPlayingMovie ? movieData.nowPlayingMovie.map(item=> {
                                return (
                                    <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                                )
                                
                            }) : null
                        }   
                        {
                            movieData.latestMovie ? (<Poster url={`movie/${movieData.latestMovie.id}`} title={movieData.latestMovie.original_title} poster_path={movieData.latestMovie.poster_path} overview={movieData.latestMovie.overview}/>): null
                        }
                        {
                            movieData.popularMovie ? movieData.popularMovie.map(item=>{
                                return (
                                    <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                                )
                            }) : null
                        }
                        {
                            movieData.upcomingMovie ? movieData.upcomingMovie.map(item=>{
                                return (
                                    <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                                )
                            }) : null
                        }
                        
                    </PaddingContainer>
                </ContentsContainer>
            </>
        );
    }else if(movieSearchData.length === 0){
        return (
            <div>결과없음</div>
        );
    }else if(movieSearchData.length > 1){
        return(
            <>
                {
                    movieSearchData ? movieSearchData.map(item =>{
                        return <Poster key={item.id} url={`movie/${item.id}`} title={item.original_title} poster_path={item.poster_path} />
                    }) : null
                }
            </>
        );  
    }
    
}

export default MoviePresenter;



