import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {PaddingContainer} from '../../components/Container';
import Poster from '../../components/Poster';

const HomeWrap = styled.div`
    width:100%;
    min-height:100%;
    flex: 1 0 auto;
    padding-top:70px;
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
    button{
        border:2px solid #fff; background-color:transparent; padding:20px; width:200px; line-height:25px;
        color:#fff; font-size:24px;
    }
`;

function HomePresenter({moviedata, tvdata}){
    console.log(moviedata, tvdata)

    const [random, setRandom] = useState(0);
    
    useEffect(() => {
        setRandom(Math.floor(Math.random()*20));
    },[])

    return(
        <>
            {moviedata.popularMovie ? (
                <HomeWrap>
                <ImgBox url={moviedata.popularMovie[random].backdrop_path}>
                    <TitleWrap>
                        <h2>{moviedata.popularMovie[random].overview}</h2>
                        <button>MORE</button>
                    </TitleWrap>
                </ImgBox>
                <PaddingContainer>
                    {
                        moviedata.latestMovie ? (
                            <Poster title={moviedata.latestMovie.original_title} />
                        ) : null 
                    }
                    {
                        moviedata.nowPlayingMovie ? moviedata.nowPlayingMovie.map(item =>{
                            return <Poster key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                        }) : null
                    }
                    {
                        moviedata.popularMovie ? moviedata.popularMovie.map(item =>{
                            return <Poster key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                        }) : null
                    }
                    {
                        moviedata.upcomingMovie ? moviedata.upcomingMovie.map(item =>{
                            return <Poster key={item.id} title={item.title} poster_path={item.poster_path} overview={item.overview}/>
                        }) : null
                    }
                </PaddingContainer>
                <PaddingContainer>
                    {
                        tvdata.latestTV ? (
                            <Poster title={tvdata.latestTV.original_name} poster_path={tvdata.latestTV.poster_path}/>
                        ) : null
                    }
                </PaddingContainer>
                </HomeWrap>
            ): "null"}
        </>
    );
}


export default HomePresenter;