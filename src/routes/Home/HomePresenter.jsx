import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {PaddingContainer, ContentsContainer, SubContainer} from '../../components/Container';
import Poster from '../../components/Poster';
import SearchContext from '../../components/Context';

const HomeWrap = styled.div`
    width:100%;
    min-height:100%;
`;

const ImgBox = styled.div`
    width:100%; height:800px; overflow:hidden;
    background:linear-gradient(
        to left,
        rgba(0,0,0,0.1),
        rgba(0,0,0,1)), 
        url("http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${props => props.url}");
    background-position:350px;
    background-size: cover;
    background-repeat:no-repeat;
    background-color:#000;
    img{width:100%;}
`;

const TitleWrap =styled.div`
    width:1200px; margin:300px auto 0 auto;
    h2{
        font-size:56px; text-transform:uppercase; margin-bottom:30px; line-height:60px;
        width:600px; height:190px; overflow:hidden; text-overflow:ellipsis;
        display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;
    }
`;

const Button = styled(Link)`
    border:2px solid #fff; background-color:transparent; padding:20px; width: 180px;
    line-height: 15px; color: #fff; font-size: 20px; display:block; text-align:center;
`;

const NoneresultTitle = styled.div`
    min-height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:32px;
    font-weight:bold;
`;


function HomePresenter({moviedata, tvdata, searchData}){
    
    const [random, setRandom] = useState(0);
    const {search} = useContext(SearchContext); 

    useEffect(() => {
        setRandom(Math.floor(Math.random()*20));
    },[])

    if(!searchData){
        return(
            <>
                {moviedata.popularMovie ? (
                    <HomeWrap>
                        <ImgBox url={moviedata.popularMovie[random].backdrop_path}>
                            <TitleWrap>
                                <h2>{moviedata.popularMovie[random].overview}</h2>
                                <Button url={`movie/${moviedata.popularMovie[random].id}`}>MORE</Button>
                            </TitleWrap>
                        </ImgBox>
    
                        <ContentsContainer>
                            <h2>MOVIE</h2>
                            <PaddingContainer>    
                                {
                                    moviedata.latestMovie ? (
                                        <Poster url={`movie/${moviedata.latestMovie.id}`} title={moviedata.latestMovie.original_title} />
                                    ) : null 
                                }
                                {
                                    moviedata.nowPlayingMovie ? moviedata.nowPlayingMovie.map(item =>{
                                        return <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} />
                                    }) : null
                                }
                                {
                                    moviedata.popularMovie ? moviedata.popularMovie.map(item =>{
                                        return <Poster url={`/movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} />
                                    }) : null
                                }
                                {
                                    moviedata.upcomingMovie ? moviedata.upcomingMovie.map(item =>{
                                        return <Poster url={`movie/${item.id}`} key={item.id} title={item.title} poster_path={item.poster_path} />
                                    }) : null
                                }
                            </PaddingContainer>
                        </ContentsContainer>
    
                        <ContentsContainer>
                            <h2>TV</h2>
                            <PaddingContainer>
                                {
                                    tvdata.lastestTV ? (
                                        <Poster url={`tv/${tvdata.lastestTV.id}`} title={tvdata.lastestTV.original_name} poster_path={tvdata.lastestTV.poster_path}/>
                                    ) : null
                                }
                                {
                                    tvdata.airingTodayTV ? (tvdata.airingTodayTV.map(item=>{
                                        return (    
                                            <Poster url={`tv/${item.id}`} key={item.id} title={item.original_name} poster_path={item.poster_path} />
                                        )
                                    })) : null
                                }
                            </PaddingContainer>
                        </ContentsContainer>
                    </HomeWrap>
                ): null}
            </>
        );
    }else if(searchData.length === 0){
        return(
            <SubContainer>
                <NoneresultTitle>{search} 검색 결과없음</NoneresultTitle>
            </SubContainer>
        );

    }else if(searchData.length > 0){
        return(
            <>
                <ContentsContainer>
                    <h2>검색결과</h2>
                    <PaddingContainer>
                        {
                            searchData ? searchData.map(item=>{
                                return <Poster url={`movie/${item.id}`} title={item.original_title} poster_path={item.poster_path} />
                            }) : null
                        }
                    </PaddingContainer>
                </ContentsContainer>

            </>
        );
    }
    
}


export default HomePresenter;