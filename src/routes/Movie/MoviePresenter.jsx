import React, {useContext} from 'react';
import Poster from '../../components/Poster';
import SearchContext from '../../components/Context';
import {PaddingContainer, ContentsContainer, SubContainer, VideoWtap} from '../../components/Container';
import styled from 'styled-components';

const NoneresultTitle = styled.div`
    min-height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:32px;
    font-weight:bold;
`; 
function MoviePresenter({movieData, movieSearchData}){

    const {search} = useContext(SearchContext);
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
    }
    if(movieSearchData.length === 0){
        return (
            <SubContainer>
                <NoneresultTitle>{search} 검색 결과없음</NoneresultTitle>
            </SubContainer>
        );
    }
    if(movieSearchData.length > 0){
        return(
            <>
                <ContentsContainer>
                    <h2>검색결과</h2>
                    <PaddingContainer>
                        {
                            movieSearchData ? movieSearchData.map(item =>{
                                return <Poster key={item.id} url={`movie/${item.id}`} title={item.original_title} poster_path={item.poster_path} />
                            }) : null
                        }
                    </PaddingContainer>
                </ContentsContainer>
            </>
        );  
    }
    
}

export default MoviePresenter;



